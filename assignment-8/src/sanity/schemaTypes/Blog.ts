export default {
    name: "blog",
    type: "document",
    title: "My blogs",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Enter blog title"
        },
        {
            name: "description",
            type: "string",
            title: "Enter blog description"
        },
        {
            name: "bannerImage",
            type: "image",
            title: "Blog banner",
        },
        {
            name: "blogBody",
            type: "array",
            title: "Main blog body",
            of: [
                { type: "block" },
                {
                    type: "image",
                    title: "inline diagram",
                    fields: [
                        // {
                        //     type:"image",
                        //     title:"image",
                        //     name:"inlineImage"
                        // },
                        {
                            type: "string",
                            title: "Image alternate text",
                            name: "imageAlternateText"
                        },
                        {
                            type: "string",
                            name: "imageCaption",
                            title: "Image Caption"
                        }
                    ]
                }
            ]
        },
    ]
}