import soap from "soap";

export async function callBCSoapFunction(method, params = {}) {
  const {
    BC_HOST,
    BC_SOAP_PORT,
    BC_INSTANCE,
    BC_COMPANY,
    BC_SOAP_TYPE,
    BC_SOAP_OBJECT,
    BC_USERNAME,
    BC_PASSWORD,
    AUTH_TYPE,
  } = process.env;

  const wsdlUrl = `http://${BC_HOST}:${BC_SOAP_PORT}/${BC_INSTANCE}/WS/${BC_COMPANY}/${BC_SOAP_TYPE}/${BC_SOAP_OBJECT}?wsdl`;

  console.log("🧼 WSDL URL:", wsdlUrl);
  console.log("🧼 SOAP Method:", method);
  console.log("🧼 SOAP Params:", params);
  console.log("🔐 Auth Type:", AUTH_TYPE);

  try {
    // Construct auth header manually for the WSDL fetch
    const authHeader =
      "Basic " +
      Buffer.from(`${BC_USERNAME}:${BC_PASSWORD}`).toString("base64");

    const client = await soap.createClientAsync(wsdlUrl, {
      wsdl_headers: {
        Authorization: authHeader,
      },
    });

    // Set credentials on the client too
    if (AUTH_TYPE === "basic") {
      client.setSecurity(new soap.BasicAuthSecurity(BC_USERNAME, BC_PASSWORD));
    } else if (AUTH_TYPE === "ntlm") {
      console.warn("⚠️ NTLM auth is not implemented yet for SOAP.");
      throw new Error("NTLM authentication for SOAP is not supported yet.");
    }

    const [result] = await client[`${method}Async`](params);
    return result;
  } catch (error) {
    throw new Error(
      `SOAP call failed: ${
        error.message
      }\n\nWSDL: ${wsdlUrl}\n\nRaw Response:\n${
        error.response?.body || "No response body"
      }`
    );
  }
}
