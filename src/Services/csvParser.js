// Services/csvParser.js
import Papa from 'papaparse';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

/**
 * Parses a CSV file and sets the parsed data in the component's state.
 * @param {string} filePath - The path to the CSV file.
 * @param {function} setData - The state setter function to store parsed data.
 */
const csvParser = async (filePath, setData) => {
  try {
    // Get the local URI of the CSV file asset
    const asset = Asset.fromModule(require(filePath));
    await asset.downloadAsync();
    const csvUri = asset.localUri;

    // Read the CSV file content as text
    const csvText = await FileSystem.readAsStringAsync(csvUri);

    // Parse the CSV content
    Papa.parse(csvText, {
      header: true,
      complete: (result) => setData(result.data),
      error: (error) => console.error("Error parsing CSV:", error),
    });
  } catch (error) {
    console.error("Error loading CSV file:", error);
  }
};

export default csvParser;
