# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys

import sphinx_rtd_theme

sys.path.insert(0, os.path.abspath("../src/"))

project = 'Mod2-tam'
copyright = '2024, Harsh Vardhan Badaya'
author = 'Harsh Vardhan Badaya'
release = 'v0.3'

extensions = [
    "sphinx_rtd_theme",
    "sphinx.ext.todo",
    "sphinx.ext.viewcode",
    "sphinx.ext.autodoc",
]

templates_path = ["_templates"]

exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "sphinx_rtd_theme"

html_static_path = [sphinx_rtd_theme.get_html_theme_path()]
