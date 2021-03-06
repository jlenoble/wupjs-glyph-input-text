import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import dom from 'jsdom-global';
import GlyphInputText from '../src/glyph-input-text';

describe('Testing <GlyphInputText/>', function () {
  this.timeout(5000); // eslint-disable-line no-invalid-this

  beforeEach(function () {
    this.cleanup = dom(); // eslint-disable-line no-invalid-this
  });

  afterEach(function () {
    this.cleanup(); // eslint-disable-line no-invalid-this
  });

  it(`<GlyphInputText/> can be instantiated with no props`, function () {
    shallow(
      <GlyphInputText/>
    );
  });

  it(`<GlyphInputText/> can be instantiated with props`, function () {
    shallow(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {}}
        exposeInputNode={node => {}}
      />
    );
  });

  it(`<GlyphInputText/> contains an input[type="text"]`, function () {
    const wrapper = shallow(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {}}
        exposeInputNode={node => {}}
      />
    );

    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    expect(input).to.have.attr('type', 'text');
    expect(input).to.have.className('form-control');
  });

  it(`<GlyphInputText/> contains a button and a glyph`, function () {
    const wrapper = shallow(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {}}
        exposeInputNode={node => {}}
      />
    );

    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(button).to.have.className('btn');
    expect(button).to.have.className('btn-secondary');

    expect(i).to.have.className('fa');
    expect(i).to.have.className('fa-pencil');
  });

  it(`<GlyphInputText/> can receive more class names`, function () {
    const wrapper = shallow(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {}}
        exposeInputNode={node => {}}
        groupAddClass="group-added"
        groupButtonAddClass="group-button-added"
        inputAddClass="input-added"
        buttonAddClass="btn-added"
        glyphAddClass="glyph-added"
      />
    );

    const form = wrapper.find('form');
    const span = wrapper.find('span');
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(form).to.have.length(1);
    expect(span).to.have.length(1);
    expect(input).to.have.length(1);
    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(form).to.have.className('input-group');
    expect(form).to.have.className('group-added');

    expect(span).to.have.className('input-group-btn');
    expect(span).to.have.className('group-button-added');

    expect(input).to.have.className('form-control');
    expect(input).to.have.className('input-added');

    expect(button).to.have.className('btn');
    expect(button).to.have.className('btn-secondary');
    expect(button).to.have.className('btn-added');

    expect(i).to.have.className('fa');
    expect(i).to.have.className('fa-pencil');
    expect(i).to.have.className('glyph-added');
  });

  it(`<GlyphInputText/>'s default class names can be overridden`, function () {
    const wrapper = shallow(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {}}
        exposeInputNode={node => {}}
        groupBaseClass="group-replaced"
        groupButtonBaseClass="group-button-replaced"
        inputBaseClass="input-replaced"
        buttonBaseClass="btn-replaced"
        glyphBaseClass="glyph-replaced"
        groupAddClass="group-added"
        groupButtonAddClass="group-button-added"
        inputAddClass="input-added"
        buttonAddClass="btn-added"
        glyphAddClass="glyph-added"
      />
    );

    const form = wrapper.find('form');
    const span = wrapper.find('span');
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(form).to.have.length(1);
    expect(span).to.have.length(1);
    expect(input).to.have.length(1);
    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(form).not.to.have.className('input-group');
    expect(form).to.have.className('group-replaced');
    expect(form).to.have.className('group-added');

    expect(span).not.to.have.className('input-group-btn');
    expect(span).to.have.className('group-button-replaced');
    expect(span).to.have.className('group-button-added');

    expect(input).not.to.have.className('form-control');
    expect(input).to.have.className('input-replaced');
    expect(input).to.have.className('input-added');

    expect(button).not.to.have.className('btn');
    expect(button).not.to.have.className('btn-secondary');
    expect(button).to.have.className('btn-replaced');
    expect(button).to.have.className('btn-added');

    expect(i).not.to.have.className('fa');
    expect(i).not.to.have.className('fa-pencil');
    expect(i).to.have.className('glyph-replaced-pencil');
    expect(i).to.have.className('glyph-added');
  });

  it(`<GlyphInputText/> can be submitted`, function () {
    let nClicks = 0;
    const wrapper = mount(
      <GlyphInputText
        glyph="pencil"
        onSubmit={() => {
          nClicks++;
        }}
      />
    );

    const e = {
      preventDefault () {},
    };

    expect(nClicks).to.equal(0);
    wrapper.simulate('submit', e);
    expect(nClicks).to.equal(1);
    wrapper.simulate('submit', e);
    expect(nClicks).to.equal(2);
  });

  it(`<GlyphInputText/> can be submitted and text recovered`, function () {
    let text = '';

    const wrapper = mount(
      <GlyphInputText
        glyph="pencil"
        onSubmit={e => {
          text = e.target.value.trim();
        }}
      />
    );

    const e = {
      preventDefault () {},
    };

    wrapper.simulate('submit', e);
    expect(text).to.equal('');
    wrapper.find('input').getDOMNode().value = 'new value';
    expect(text).to.equal('');
    wrapper.simulate('submit', e);
    expect(text).to.equal('new value');
  });

  it(`<GlyphInputText/> with no onSubmit prop throws an error on submit`,
    function () {
      const wrapper = mount(
        <GlyphInputText
          glyph="pencil"
        />
      );

      const e = {
        preventDefault () {},
      };

      expect(wrapper.simulate.bind(wrapper, 'submit', e)).to.throw(TypeError);
    });
});
