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

##For running the code you have to take care of the following:

- Correct all the lines length which should be <=79
- Also transfer all the modules at the top of the file
- Verify that there are no repititions of a single variable
- Or any other error with respect to the python environment which we have created
