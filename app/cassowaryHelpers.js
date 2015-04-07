import c from 'cassowary';

// Helpers to make cassowary.js a bit clearer.
window.weak = c.Strength.weak;
window.medium = c.Strength.medium;
window.strong = c.Strength.strong;
window.required = c.Strength.required;

window.eq  = function(a1, a2, strength, w) {
  return new c.Equation(a1, a2, strength || weak, w||0);
};
window.neq = function(a1, a2, a3) { return new c.Inequality(a1, a2, a3); };
window.geq = function(a1, a2, str, w) { return new c.Inequality(a1, c.GEQ, a2, str, w); };
window.leq = function(a1, a2, str, w) { return new c.Inequality(a1, c.LEQ, a2, str, w); };

window.stay = function(v, strength, weight) {
  return new c.StayConstraint(v, strength||weak, weight||0);
};
window.weakStay =     function(v, w) { return stay(v, weak,     w||0); };
window.mediumStay =   function(v, w) { return stay(v, medium,   w||0); };
window.strongStay =   function(v, w) { return stay(v, strong,   w||0); };
window.requiredStay = function(v, w) { return stay(v, required, w||0); };