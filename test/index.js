import 'babel-polyfill';
import Dtisvgelement from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Dtisvgelement', () => {

  it('renders a React element', () => {
    React.isValidElement(<Dtisvgelement />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let dtiSvgelement = null;
    beforeEach(() => {
      rendered = mount(<Dtisvgelement />);
      dtiSvgelement = rendered.find('dti-svgelement');
    });

    it('renders a top level div.dti-svgelement', () => {
      dtiSvgelement.should.have.tagName('div');
      dtiSvgelement.should.have.className('dti-svgelement');
    });

    xit('renders <FILL THIS IN>', () => {
      dtiSvgelement.should.have.exactly(1).descendents('.the-descendent-class');
      dtiSvgelement.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
