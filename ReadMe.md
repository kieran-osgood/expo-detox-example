# Running tests
- `yarn`
- Visit: https://expo.io/--/api/v2/versions and download the iosUrl file, move it to path: `bin/Exponent.app` (I've left `Exponent-2.25.1.tag.gz` in the root if you want to use that one).
- Run `yarn ios:start` to install/start metro bundler
- In a separate terminal run `yarn e2e`
(this workflow could be improved/automated together, this was just a basic configuration as I tested getting these things working)