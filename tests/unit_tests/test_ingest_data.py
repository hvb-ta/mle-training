import os
import unittest

import pandas as pd
from HousePricePrediction import ingest_data


class TestIngestData(unittest.TestCase):
    def test_load_housing_data(self):
        sample_csv_content = "ID,NAME\n1,Piyush\n2,Tiger"
        sample_csv_path = "tmp/"

        with open(sample_csv_path + "housing.csv", "w") as file:
            file.write(sample_csv_content)

        ingest_data.load_housing_data.HOUSING_PATH = "/tmp/"

        housing_data = ingest_data.load_housing_data(sample_csv_path)

        expected_data = pd.DataFrame({"ID": [1, 2], "NAME": ["Piyush", "Tiger"]})
        pd.testing.assert_frame_equal(housing_data, expected_data)

        # Clean
        os.remove(sample_csv_path + "housing.csv")

    def setUp(self):
        data = {
            "median_income": [1.2, 2.42, 3.121, 5.12, 7.51],
            "total_rooms": [100, 500, 800, 1000, 1500],
            "households": [10, 18, 22, 50, 56],
            "total_bedrooms": [11, 20, 21, 40, 46],
            "population": [47, 98, 155, 205, 250],
            "ocean_proximity": [0, 1, 0, 1, 0],
            "median_house_value": [200000, 300000, 400000, 500000, 600000],
        }
        self.df = pd.DataFrame(data)

    def test_preprocess_data(self):
        processed_df = ingest_data.preprocess_data(self.df)
        self.assertIsNotNone(processed_df)


if __name__ == "__main__":
    unittest.main()
