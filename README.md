# From Zero to Hero with Vonage Video

<img src="https://assets.tokbox.com/img/vonage/Vonage_VideoAPI_black.svg" height="48px" alt="Tokbox is now known as Vonage" />

This tutorial will walk you through the process of creating a video call application in just a few steps.

We will utilize:
<details>
    <summary>Vonage Video API</summary>
    The <a href="https://developer.vonage.com/en/video/overview" target="_blank">Vonage Video API</a> platform makes it possible to embed real-time, high-quality interactive video, messaging, screen-sharing, and more into web and mobile apps. The platform includes client libraries for the web, mobile, and desktop platform as well as server-side SDKs.
</details>

<details>
    <summary>Vonage Video Node Server SDK</summary>
    The <a href="https://developer.vonage.com/en/video/overview" target="_blank">Vonage Video Node Server SDK</a> lets you create sessions, generate tokens, and work with Vonage Video API for archiving and much more.
</details>

<details>
    <summary>Vonage Video JavaScript Client SDK and Web Components</summary>
    The <a href="https://developer.vonage.com/en/video/client-sdks/web/overview" target="_blank">Vonage Video JavaScript Client SDK</a> unlocks the power of the Video API in the browser. The <a href="https://github.com/Vonage-Community/web_components-video_api-javascript/" target="_blank">Vonage Video Web Components</a> package many of the most common use cases into self-contained elements that can be dropped into any Web application.
</details>

<details>
    <summary>Vonage Cloud Runtime and Code Hub</summary>
    <a href="https://developer.vonage.com/en/vonage-cloud-runtime/overview" target="_blank">Vonage Cloud Runtime</a> eliminates the need to host and maintain your own infrastructure to use the Vonage APIs and allows developers to go into production faster. <a href="https://developer.vonage.com/en/cloud-runtime" target="_blank">Code Hub</a> showcases pre-built solutions ready to be deployed to Vonage's serverless platform.
</details>

## Getting Set Up

>Note:  These instructions are also in the project's README.md file if you need to reference them again.
1. To start, ensure you are signed into your Vonage developer account. If you do not have an account yet, you can create one <a href="https://vonage.dev/Dreamforce-24" target="_blank">here</a>.

2. Next, click the "Get Code" tab.

3. Then click the "Create a new development environment" button.

4. You will then be asked for some information to set up your workspace. After that, your workspace will launch to show an in-browser code editor.

5. If the terminal isn't already opened, click "Terminal" in the menu bar at the top and select "New Terminal".

6. To install any dependencies the project needs, run the following command in the Terminal:
```
npm install
```

7. Once the dependencies are installed, you can start the tutorial by launching a debugging instance of the project by running this command in the Terminal:

```
vcr debug
```

8. Type `y` and press Enter for the question regarding a debug application-id.

9. Open the `Application Host:` URL in a new tab to start the tutorial. There are only 2 files that you will need to modify: `index.html` and `script.js`. Both can be found in the `public` folder.

### Good Luck!
Let us know if you run into any issues.