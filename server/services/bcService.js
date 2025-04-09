import axios from "axios";

function buildODataUrl(endpoint, filters = [], queryParams = {}) {
  const baseUrl = `http://${process.env.BC_HOST}:${process.env.BC_ODATA_PORT}/${process.env.BC_INSTANCE}/ODataV4/Company('${process.env.BC_COMPANY}')`;

  let filterQuery = "";
  if (filters.length) {
    const conditions = filters.map(({ field, operator, value }) => {
      const safeValue = encodeURIComponent(`'${value}'`);
      return `${field} ${operator} ${safeValue}`;
    });
    filterQuery = `$filter=${conditions.join(" and ")}`;
  }

  const otherParams = Object.entries(queryParams)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&");

  const query = [filterQuery, otherParams].filter(Boolean).join("&");
  const finalUrl = `${baseUrl}/${endpoint}${query ? `?${query}` : ""}`;

  return finalUrl;
}

export async function getFromOData(endpoint, filters = [], queryParams = {}) {
  try {
    const url = buildODataUrl(endpoint, filters, queryParams);
    console.log("🚀 Final OData URL:", url);

    const response = await axios.get(url, {
      auth: {
        username: process.env.BC_USERNAME,
        password: process.env.BC_PASSWORD,
      },
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "❌ OData request failed:",
      error.response?.data || error.message
    );
    throw error; // rethrow so Express can catch and return 500
  }
}
