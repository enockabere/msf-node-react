// services/odataService.js
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

    const { AUTH_TYPE, BC_USERNAME, BC_PASSWORD } = process.env;

    const headers = { Accept: "application/json" };
    let axiosConfig = { headers };

    if (AUTH_TYPE === "basic") {
      axiosConfig.auth = {
        username: BC_USERNAME,
        password: BC_PASSWORD,
      };
    } else if (AUTH_TYPE === "ntlm") {
      console.warn("⚠️ NTLM auth is not implemented yet.");
      throw new Error("NTLM authentication is not supported yet.");
    }

    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error(
      "❌ OData request failed:",
      error.response?.data || error.message
    );
    throw error;
  }
}
