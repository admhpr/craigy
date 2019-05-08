# Craigy

A program to bulk post items for sale to Craislist..

## Getting Started

clone the repo:

```bash
git clone https://github.com/harps116/craigy
```

change into the cloned directory:

```bash
cd craigy
```

## Prerequisites

[Node](https://nodejs.org/en/) ^v8.9.0

install dependencies, see [dependencies](#built-with):

```bash
npm i
```

### Setup

Using Craigy couldn't be easier.

Move the .env-example to a .env file:

```bash
mv .env-example .env
```

Add your credientials

Setup your post body:

```bash
cd /config

```

```bash
mv post-example.json post.json
```

Fill out the body.

Add an image to the `~/config/images` folder

For every image `craigy` will create a post on craiglist taking the file name as the post title

Example:

and image named `deck-chair.png` or `deck_chair.png` would have a title of `Deck chair`

If you add a folder to `~/config/images` `craigy` will iterate through each folder and post each image. Unless limited with a command line argument. See [usage](#usage).

> a mix of folders and images is not currently supported in the `~/config/images` folder

### Usage

```
npm run start <city> <price> <imageFolder?>
```

> `image folder` is optional

## Built With

- [chalk](https://www.npmjs.com/package/chalk)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nightmare](https://www.npmjs.com/package/nightmare)
- [nightmare-upload](https://www.npmjs.com/package/nightmare-upload)

## Debugging

## Issues

## Contributing

Contributing is encoruaged - see the [CONTRIBUTING](CONTRIBUTING.md) file for details

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
