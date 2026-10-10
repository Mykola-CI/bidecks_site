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

## App Store Connect

Use `https://bidecks.com/support` for the app's Support URL after deploying the site.
The page provides the existing support and product email addresses, quick help,
backup guidance, purchase restoration instructions, and privacy links without
requiring sign-in.

Before submission, verify that the public URL loads, both contact mailboxes receive
messages, and any additional contact details required by applicable local law
are published. Apple requires actual contact information; FAQs are supplementary.
See [Apple's Support URL reference](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/).
