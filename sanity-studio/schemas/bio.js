export default {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "featureimage",
      title: "Feature Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]
};
