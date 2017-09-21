import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';

describe('Acceptance | spec/hello world', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /', function() {
    visit('/');

    return andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });
});
