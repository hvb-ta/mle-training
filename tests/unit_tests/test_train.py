import unittest

import pandas as pd

from HousePricePrediction.train import (
    train_decision_tree,
    train_linear_regression,
    train_random_forest_1,
    train_random_forest_2,
)


class TestModelTraining(unittest.TestCase):
    def setUp(self):
        # sample DataFrame
        data = {
            "median_income": [1.2, 2.42, 3.121, 5.12, 7.51],
            "total_rooms": [100, 500, 800, 1000, 1500],
            "households": [10, 18, 22, 50, 56],
            "total_bedrooms": [11, 20, 21, 40, 46],
            "population": [47, 98, 155, 205, 250],
            "ocean_proximity": [0, 1, 0, 1, 0],
            "median_house_value": [200000, 300000, 400000, 500000, 600000],
        }
        self.training_data = pd.DataFrame(data)

    def test_train_random_forest_1(self):
        model = train_random_forest_1(self.training_data)
        self.assertIsNotNone(model)

    def test_train_random_forest_2(self):
        model = train_random_forest_2(self.training_data)
        self.assertIsNotNone(model)

    def test_train_linear_regression(self):
        model = train_linear_regression(self.training_data)
        self.assertIsNotNone(model)

    def test_train_decision_tree(self):
        model = train_decision_tree(self.training_data)
        self.assertIsNotNone(model)


if __name__ == "__main__":
    unittest.main()
