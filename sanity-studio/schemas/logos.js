export default {
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: true // <-- Defaults to false
      }
    },
    {
      title: "Alt Text - Logo Title",
      name: "altText",
      type: "string"
    },
    {
      title: "Link To",
      name: "link",
      type: "url"
    },
    {
      title: "Featured on front page?",
      name: "featured",
      type: "boolean"
    }
  ]
};
