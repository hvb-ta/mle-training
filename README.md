# Median housing value prediction

The housing data can be downloaded from https://raw.githubusercontent.com/ageron/handson-ml/master/. The script has codes to download the data. We have modelled the median house value on given housing data.

The following techniques have been used:

 - Linear regression
 - Decision Tree
 - Random Forest

## Steps performed
 - We prepare and clean the data. We check and impute for missing values.
 - Features are generated and the variables are checked for correlation.
 - Multiple sampling techinuqies are evaluated. The data set is split into train and test.
 - All the above said modelling techniques are tried and evaluated. The final metric used to evaluate is mean squared error.

## Bugs removed
 - fetch_housing_data()
 - housing = load_housing_data()
 (These functions were called)

 - corr_matrix = housing.corr(numeric_only=True)
 (This syntax was changed. Old one was deprecated)

## To excute the script
python nonstandardcode.py

## To add .yml file
conda env export --no-builds > env.yml

## To activate python-development environment mle-dev
conda activate mle-dev


## Project (as per Assignmnt)
 - Project Desciption : Housing Dataset
 - Command to Create env.yml: conda env export --name mle-dev > env.yaml
 - Command to activate the enviroment: conda activate mle-dev


 - Command to create enviroment from env.yaml: conda env create -f env.yaml

 ## Command to run and Install package
 ### Way 1: Build code
  #### (from mle-training)
- pip install build
- python -m build

### Way 2: Install through pip
 #### (from mle-training)
- pip install .

### For Developer Purpose installation
- pip install -e .

### Run python code:
- python <script>.py
#### Run Main Code:
- python src/main.py --workflow ingest --log-level DEBUG --log-to-file
- python src/main.py --workflow train --log-level DEBUG --log-to-file
- python src/main.py --workflow score --log-level DEBUG --log-to-file

## Import Package
- import HousePricePrediction.<module_name> as hp

