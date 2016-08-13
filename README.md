# Join Class Names

A micro function that accepts n arguments, removes falsey & non-string args, and joins them separated by space.

```
import join from 'join-classnames';

join('a', true===false & 'b', 'c'); // "a c";
```

Micro? the docs have more chars than the code ¯\_(ツ)_/¯
