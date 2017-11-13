# webpack-template
A basic webpack setup to implement in a new project, including Bootstrap sass and FontAwesome.

## Usage

To install and use, you can run the below:

	# Install dependencies
	npm i

	# Build the front-end
	npm run build

	# Watch for file changes and rebuild
	npm run watch

## Implementation

To implement in your project, copy the right files (postcss.config.js, webpack.config.js, package.json, library) and start using. You will have to read the manifest file to get the version hashes. Look at the readManifest function at the top of the **index.php** for an example.

## Notes

css-loader has been kept to version 0.14.0 as there is a dramatic effect on performance in the versions after. It seems to work fine but definitely something to keep in mind.

It is using Montserrat from google fonts as the main sans-serif font. A couple of variables have been overwritten in library/scss/bootstrap/\_custom\_variables.scss: $font-family-sans-serif and $headings-font-weight.