<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<!-- <p align="center">
  <a href="https://protestswork.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p> -->
<h1 align="center">
  Protests Work
</h1>

This repo is dedicated to enuring that the fruits of democratic protests around the world are heard and seen directly. This grew out of the protests for Geroge Floyd in 2020 in the United States, but will try to document previous and new protests from all around the world.

View the site [here](www.protestswork.com)


This site is built using Gatsby, reading from a json file, and then deployed to S3 with cloudfront in front
## 🚀 Quick start

1.  **Adding a New Effect.**

    When a new demonstrable effect is felt from a protest we want to add it to this site. Instructions for how to do so:

    1. Navigate to [src/content/impact.json](src/content/impact.json)
    2. Scroll to bottom and add a comma after the last } prior to the ] 
    3. Copy this snippet:
      ```json
          {
            "title": "Example Title",
            "description": "Example Description",
            "location": "Example Location",
            "date": "DATE",
            "link": "Link here",
            "protest": "Associated Protest",
            "tags": [
                "Tag1",
                "Tag2"
            ]
          }
    ```
    4. Paste at the bottom of the impact.json document following the comma you placed earlier and prior to the ]
    5. Edit your effect with the fields.
    6. Submit a branch/PR with the commit message: `content: <fill in descriptive commit message here>`
    7. We'll review and when merged the content will be live

1.  **Start developing.**

    ```shell
    git clone https://github.com/Protests-Work/protests-work.git
    cd protests-work
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The site should now be live at `http://localhost:8000`!

    <!-- _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._ -->

## 💫 Deploy

1. Merge to master and this site will deploy to S3 via Github Actions. No other deployment methods are supported
