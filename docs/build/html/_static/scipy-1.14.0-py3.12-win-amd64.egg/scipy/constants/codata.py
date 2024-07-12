# This file is not meant for public use and will be removed in SciPy v2.0.0.
# Use the `scipy.constants` namespace for importing the functions
# included below.

from scipy._lib.deprecation import _sub_module_deprecation

__all__ = [  # noqa: F822
    'physical_constants', 'value', 'unit', 'precision', 'find',
    'ConstantWarning', 'k', 'c',

]


def __dir__():
    return __all__


def __getattr__(name):
    return _sub_module_deprecation(sub_package="constants", module="codata",
                                   private_modules=["_codata"], all=__all__,
                                   attribute=name)
