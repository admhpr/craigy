# Contributing to Craigy

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to `craigy`.

These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [JavaScript Styleguide](#javascript-styleguide)
- [Specs Styleguide](#specs-styleguide)
- [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)

##

### Reporting Bugs

### Suggesting Enhancements

### Your First Code Contribution

### Pull Requests

## Styleguides

### JavaScript Styleguide

```js
// Use this:
module.exports = function() {
    // logic for module
};

// Instead of:
functionName() {
    // logic for module
}
module.exports = functionName;
```

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Mocha](https://mochajs.org/) specs in the `./src/test` folder.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.

#### Example

```javascript
describe 'a dog', ->
 it 'barks', ->
 # spec here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # spec here
```

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown).
