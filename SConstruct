# Starter SConstruct for enscons

import sys
from distutils import sysconfig
import pytoml as toml
import enscons

metadata = dict(toml.load(open('pyproject.toml')))['tool']['enscons']

full_tag = 'py2.py3-none-any' # pure Python packages compatible with 2+3

env = Environment(tools=['default', 'packaging', enscons.generate],
                  PACKAGE_METADATA=metadata,
                  WHEEL_TAG=full_tag,
                  ROOT_IS_PURELIB=full_tag.endswith('-any'))

# Only *.py is included automatically by setup2toml.
# Add extra 'purelib' files or package_data here.
py_source = Glob('src/*/*.py')

purelib = env.Whl('purelib', py_source, root=metadata['src_root'])
whl = env.WhlFile(purelib)

# Add automatic source files, plus any other needed files.
sdist_source=FindSourceFiles() + ['PKG-INFO', 'setup.py']

sdist = env.SDist(source=sdist_source)

env.NoClean(sdist)
env.Alias('sdist', sdist)
