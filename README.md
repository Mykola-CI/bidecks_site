# BiDecks website

Static English-language website for BiDecks, built with HTML, JavaScript, Bootstrap, and custom CSS.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Routes

- `/` - landing page
- `/support/` - app support, troubleshooting, and contact information
- `/privacy/` - privacy policy
- `/terms/` - terms of service

Production footer navigation uses `https://bidecks.com/support`, `https://bidecks.com/privacy`, and `https://bidecks.com/terms`.

The landing page's Showcase sits between Hero and About, with separate smartphone
and tablet image grids from `assets/images/gallery/iPhone/` and
`assets/images/gallery/iPad/`. Each grid uses four columns on desktop, two below
992px, and one below 576px. Section backgrounds alternate dark and lighter
surfaces through the footer.

Select a Showcase image to open its Kaleidoscope preview. The centered viewer
fills almost the screen on mobile and fits each full image inside the available
frame without cropping, distortion, or scrolling. Previous/next
buttons and Left/Right arrow keys cycle within the selected device group,
wrapping at either end. Close with the close button, Escape, or the backdrop.
Without JavaScript, image links open the original files.

## App Store Connect

Use `https://bidecks.com/support` for the app's Support URL after deploying the site.
The page provides the existing support and product email addresses, quick help,
backup guidance, purchase restoration instructions, and privacy links without
requiring sign-in.

Before submission, verify that the public URL loads, both contact mailboxes receive
messages, and any additional contact details required by applicable local law
are published. Apple requires actual contact information; FAQs are supplementary.
See [Apple's Support URL reference](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/).
