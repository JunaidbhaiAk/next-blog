import React, { useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import { RichText, Elements } from "prismic-reactjs";
import Prism from "prismjs";
import "prismjs/themes/prism-lucario.css";

const PostContent = ({ ele }) => {
  useEffect(() => {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.hooks.add("before-sanity-check", function (env) {
      // env.selector += ', pre[class*="language-"], pre[class*="lang-"]';
      env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, "\n");
      env.code = env.element.textContent;
    });
    Prism.hooks.add("before-highlightall", function (env) {
      env.selector += ', pre[class*="language-"], pre[class*="lang-"]';
    });
    Prism.highlightAll();
  }, []);

  const propsWithUniqueKey = function (props, key) {
    return Object.assign(props || {}, { key });
  };

  const htmlSerializer = function (type, element, content, children, key) {
    var props = {};

    switch (type) {
      case Elements.heading1: // Heading 1
        props = { className: "font-bold text-lwhite text-4xl p-3" };
        return React.createElement(
          "h1",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.heading2: // Heading 2
        props = { className: "font-bold text-lwhite text-3xl py-3" };
        return React.createElement(
          "h2",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.heading3: // Heading 3
        props = { className: "font-bold text-lwhite text-2xl py-3" };
        return React.createElement(
          "h3",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.heading4: // Heading 4
        props = { className: "font-bold text-lwhite text-xl py-3" };
        return React.createElement(
          "h4",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.heading5: // Heading 5
        props = { className: "font-bold text-lwhite text-lg py-3" };
        return React.createElement(
          "h5",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.heading6: // Heading 6
        props = { className: "font-bold text-lwhite text-lg py-3" };
        return React.createElement(
          "h6",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.paragraph: // Paragraph
        props = { className: "font-semibold text-lwhite text-base pb-4" };
        return React.createElement(
          "p",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.preformatted: // Preformatted
        props = { className: "language-cpp" };
        return (
          <pre className="lang-javascript" key={key}>
            {children}
          </pre>
        );

      case Elements.strong: // Strong
        return React.createElement(
          "strong",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.em: // Emphasis
        props = { className: "font-bold text-base text-highlight" };
        return React.createElement(
          "em",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.listItem: // Unordered List Item
        return React.createElement(
          "li",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.oListItem: // Ordered List Item
        return React.createElement(
          "li",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.list: // Unordered List
        props = {
          className:
            "font-medium text-lwhite text-base pb-4 list-disc pl-4 list-inside",
        };
        return React.createElement(
          "ul",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.oList: // Ordered List
        return React.createElement(
          "ol",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.image: // Image
        const linkUrl = element.linkTo
          ? element.linkTo.url || linkResolver(element.linkTo)
          : null;
        const linkTarget =
          element.linkTo && element.linkTo.target
            ? { target: element.linkTo.target }
            : {};
        const linkRel = linkTarget.target ? { rel: "noopener" } : {};
        const img = React.createElement("img", {
          src: element.url,
          alt: element.alt || "",
        });
        return React.createElement(
          "p",
          propsWithUniqueKey(
            { className: [element.label || "", "block-img"].join(" ") },
            key
          ),
          linkUrl
            ? React.createElement(
                "a",
                Object.assign({ href: linkUrl }, linkTarget, linkRel),
                img
              )
            : img
        );

      case Elements.embed: // Embed
        props = Object.assign(
          {
            "data-oembed": element.oembed.embed_url,
            "data-oembed-type": element.oembed.type,
            "data-oembed-provider": element.oembed.provider_name,
          },
          element.label ? { className: element.label } : {}
        );
        const embedHtml = React.createElement("div", {
          dangerouslySetInnerHTML: { __html: element.oembed.html },
        });
        return React.createElement(
          "div",
          propsWithUniqueKey(props, key),
          embedHtml
        );

      case Elements.hyperlink: // Image
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {};
        const relAttr = element.data.target ? { rel: "noopener" } : {};
        props = Object.assign(
          {
            href: element.data.url || linkResolver(element.data),
          },
          {
            className:
              "font-bold text-base pb-4 text-highlight underline underline-offset-1",
          },
          targetAttr,
          relAttr
        );
        return React.createElement(
          "a",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.label: // Label
        props = element.data
          ? Object.assign({}, { className: element.data.label })
          : {};
        return React.createElement(
          "span",
          propsWithUniqueKey(props, key),
          children
        );

      case Elements.span: // Span
        if (content) {
          return content.split("\n").reduce((acc, p) => {
            if (acc.length === 0) {
              return [p];
            } else {
              const brIndex = (acc.length + 1) / 2 - 1;
              const br = React.createElement(
                "br",
                propsWithUniqueKey({}, brIndex)
              );
              return acc.concat([br, p]);
            }
          }, []);
        } else {
          return null;
        }

      default:
        // Always include a default that returns null
        return null;
    }
  };
  return (
    <div className="h-full flex flex-col bg-secondry p-5">
      <div className="pb-4 flex items-center justify-start ">
        <Image
          src="https://images.prismic.io/myblogy/74008bf6-35ff-4779-a1f2-e7029044960f_4712.jpg?auto=compress,format"
          className="bg-cover rounded-full"
          width={30}
          height={30}
          alt="my"
        />
        <div className="pl-2">
          <span className="text-sm font-semibold text-highlight font-mono">
            Junaid S.
          </span>
          <p className="text-xs text-highlight font-mono">
            {moment(ele.post_date).format("MMM DD")}
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-lwhite pb-4">
        {ele.post_title[0].text}
      </h1>
      <div>
        <RichText render={ele.post_content} htmlSerializer={htmlSerializer} />
      </div>

      <div className="flex pt-4">
        <p className="pr-2 text-highlight font-mono font-bold">
          {ele.post_tags}
        </p>
      </div>
    </div>
  );
};

export default PostContent;
