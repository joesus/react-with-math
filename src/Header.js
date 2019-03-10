import React, { Component } from 'react';
import MathJax from 'react-mathjax';

class Header extends Component {
  render() {
    const f1 = <MathJax.Node inline formula="F_1"/>
    const voodoo = <MathJax.Node inline formula="F_1= \frac{2}{\frac{1}{P} + \frac{1}{R}} =  \frac{1}{\frac{1}{2}(\frac{1}{P} + \frac{1}{R})} = \frac{1}{M}"/>
    return (
      <MathJax.Provider>
        <div>
        {f1} <a href="https://en.wikipedia.org/wiki/F1_score">scores</a> are common across natural language processing. 
        Although {f1} is easy to compute, the formula is slightly less interpretable than simpler measures like accuracy. 
        This widget tries to build intuition for {f1}.
        <br/>
        Recall the formula {voodoo}. This expression is a <a href="https://en.wikipedia.org/wiki/Harmonic_mean">harmonic mean</a>: 
        I use the mnemonic ''harmonic mean of precision and recall'' to remember what {f1} is. 
        </div>
      </MathJax.Provider>
    );
  }
}

export default Header;