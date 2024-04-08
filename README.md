When doing a npm run build:
  - the build creates a dir named 'docs' in windows only, in macos/linux it outputs dist
  - the CNAME file gets deleted on build, need to manually add it
  - if a docs dir already exists, in creates a dist dir inside the docs dir # TODO: improve command
