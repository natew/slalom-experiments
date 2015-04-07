import { router, route } from 'reapp-kit';

import cassowary from 'cassowary';
window.c = cassowary;

import './cassowaryHelpers';
import './touch';

import Hammer from './hammer';
window.Hammer = Hammer;

import Gravitas from './Gravitas';
window.Gravitas = Gravitas;

router(require,
  route('home', '/')
);