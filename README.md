# No More Burnt Toast 🥪

A game app designed to teach realistic cooking recipes to both beginners and enthusiasts alike to spark up that inner chef in everyone, including you!

## Core features

### Cooking Tutorials

- For both basic and intermediate cooking skills, no experience needed
- Practice and test your knowledge with our different modes

### Recipe Catalogue

- Get familiar with different cuisines across Asia, from China to India
- Learn both classic and contemporary dishes, including the favourite Singaporean ones you know and love

## Techincal details

### Stack

The project uses React Native with [Expo](https://expo.dev) for frontend and Firebase for backend, ensuring cross-platform compatibility, smooth deployment, and providing a reliable user experience. We are currently working on prototyping the navigation flow and UI design, but we don't have concrete progress to show yet.

For version control, we have decided to use one main Git branch for ease of development with only two people. However, milestone builds are tagged and future extensions after main features will be developed on separate branches.

### Deployed development build

We have chosen Vercel to deploy our web builds for testing and prototyping. The iOS and Android builds have been discontinued in favor of this; however, there are no features that should not work on iOS or Android either, and the app builds should work.

### Running the project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

Our only officially supported platform is the web version, hosted on Vercel, but other platforms should theoretically work as well.
