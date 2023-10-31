# solhint-config-thesis

Standard configuration for linting Solidity code using
[Solhint](https://github.com/protofire/solhint).  

Uses the `solhint:recommended` ruleset, which itself is taken from the
[Solidity Style Guide](https://solidity.readthedocs.io/en/v0.5.9/style-guide.html).

## Usage

### Setting up a project

1. Install the linter and config - `yarn add -D solhint https://github.com/thesis/solhint-config.git`
2. Create your `.solhint.json` (you can add additional rules or plugins):
```json
{
  "extends": "thesis",
  "plugins": [],
  "rules": {
  }
}
```
3. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "lint:sol": "solhint 'contracts/**/*.sol'",
    "lint:fix:sol": "solhint 'contracts/**/*.sol' --fix"
  }
}
 ```

### Disabling the linter
#### Directory
Edit the `.solhint.json`.

#### File
`/* solhint-disable */`

#### Code block
`/* solhint-disable */`  
`/* solhint-enable */`

#### Line
Prefer `/*` over `//`, as it looks different to a comment on the rationale of code.  
`/* solhint-disable-next-line <rules> */`

### Adding a pre-commit hook
```yaml
- repo: local
   hooks:
    - id: solhint
      name: Solidity linter
      language: node
      entry: solhint
      files: '\.sol$'
      args:
      - ./contracts/**/*.sol
      - --config=./.solhint.json
      additional_dependencies:
      - solhint@3.3.4
```
