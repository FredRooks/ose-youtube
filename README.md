# Open Smart Environment YouTube package

This package integrates searching and playing YouTube videos into
the [OSE Media player](http://opensmartenvironment.github.io/doc/modules/media.html).

It contains the definition of the YouTube stream [entry kind](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html) and
registers it as a source to [OSE Media player](http://opensmartenvironment.github.io/doc/modules/media.html).

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Gaps in the documentation
- No test suite

This is not yet a piece of download-and-use software. Its important
to understand the basic principles covered by this documentation.

Use of this software is currently recommended only for users that
wish participate in the development process (see Contributions).

TODO: Make "Contributions" a link

## Getting started
To get started with OSE, refer to the [ose-bundle](http://opensmartenvironment.github.io/doc/modules/bundle.html) package and
[Media player example application](http://opensmartenvironment.github.io/doc/modules/bundle.media.html). You can read the entire OSE
documentation [here]( http://opensmartenvironment.github.io/doc).

## Modules
Open Smart Environment YouTube package consists of the following modules:
- YouTube video kind
- OSE YouTube core
- OSE YouTube content

### YouTube video kind
[Entry kind](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html) representing YouTube videos.

Module [YouTube video kind](http://opensmartenvironment.github.io/doc/classes/youtube.lib.video.html) reference ... 

### OSE YouTube core
Core singleton of ose-youtube npm package. Registers [entry kinds](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html)
defined by this package to the `"media"` [scope](http://opensmartenvironment.github.io/doc/classes/ose.lib.scope.html).

Module [OSE YouTube core](http://opensmartenvironment.github.io/doc/classes/youtube.lib.html) reference ... 

### OSE YouTube content
Provides files of OSE YouTube package to the browser.

Module [OSE YouTube content](http://opensmartenvironment.github.io/doc/classes/youtube.content.html) reference ... 

## Contributions
To get started contributing or coding, it is good to read about the
two main npm packages [ose](http://opensmartenvironment.github.io/doc/modules/ose.html) and [ose-bb](http://opensmartenvironment.github.io/doc/modules/bb.html).

This software is in the pre-alpha stage. At the moment, it is
premature to file bugs. Input is, however, much welcome in the form
of ideas, comments and general suggestions.  Feel free to contact
us via
[github.com/opensmartenvironment](https://github.com/opensmartenvironment).

## Licence
This software is licensed under the terms of the [GNU GPL version
3](../LICENCE) or later
