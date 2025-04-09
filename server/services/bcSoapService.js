// services/soapService.js
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
  } = process.env;

  // Construct the WSDL URL
  const wsdlUrl = `http://${BC_HOST}:${BC_SOAP_PORT}/${BC_INSTANCE}/WS/${BC_COMPANY}/${BC_SOAP_TYPE}/${BC_SOAP_OBJECT}?wsdl`;

  console.log("WSDL URL:", wsdlUrl);
  console.log("SOAP Method:", method);
  console.log("SOAP Params:", params);

  try {
    const client = await soap.createClientAsync(wsdlUrl, {
      wsdl_headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${BC_USERNAME}:${BC_PASSWORD}`).toString("base64"),
      },
    });

    client.setSecurity(new soap.BasicAuthSecurity(BC_USERNAME, BC_PASSWORD));

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
