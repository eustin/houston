const httpGetLatestLaunches = {
  data: [
    {
      id: "b8173cec-0f32-4268-bbb6-af7bab0be436",
      slug: "vega-c-lares-2-maiden-flight",
      name: "Vega-C | LARES-2 (Maiden flight)",
      status: {
        id: 1,
        name: "Go for Launch",
        abbrev: "Go",
        description: "Current T-0 confirmed by official or reliable sources.",
      },
      net: "2022-08-07T11:13:00Z",
      lsp_name: "Arianespace",
      location: "Kourou, French Guiana",
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/vega-c_image_20190224012332.jpeg",
    },
    {
      id: "ac4ce8e1-fd76-4654-8809-5500ba792a8a",
      slug: "falcon-9-block-5-starlink-group-4-21",
      name: "Falcon 9 Block 5 | Starlink Group 4-21",
      status: {
        id: 8,
        name: "To Be Confirmed",
        abbrev: "TBC",
        description:
          "Awaiting official confirmation - current date is known with some certainty.",
      },
      net: "2022-08-07T13:00:00Z",
      lsp_name: "SpaceX",
      location: "Cape Canaveral, FL, USA",
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220523090141.png",
    },
    {
      id: "84f9bbdd-0e2c-468e-b1d0-73d640745c13",
      slug: "falcon-9-block-5-starlink-group-4-22",
      name: "Falcon 9 Block 5 | Starlink Group 4-22",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      net: "2022-08-10T00:00:00Z",
      lsp_name: "SpaceX",
      location: "Cape Canaveral, FL, USA",
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220523085935.png",
    },
    {
      id: "051c4c90-a89d-4a86-a77f-c7e22b9cb458",
      slug: "falcon-9-block-5-starlink-group-3-1",
      name: "Falcon 9 Block 5 | Starlink Group 3-1",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      net: "2022-08-11T00:00:00Z",
      lsp_name: "SpaceX",
      location: "Vandenberg SFB, CA, USA",
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220523090612.png",
    },
    {
      id: "82e754cc-c893-4992-a992-c1b3db972c80",
      slug: "black-brant-ix-deuce",
      name: "Black Brant IX | DEUCE",
      status: {
        id: 1,
        name: "Go for Launch",
        abbrev: "Go",
        description: "Current T-0 confirmed by official or reliable sources.",
      },
      net: "2022-08-12T10:57:00Z",
      lsp_name: "Equatorial Launch Australia",
      location: "Arnhem Space Centre",
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/black_brant_ix_image_20220625190201.jpg",
    },
  ],
  status: 200,
  statusText: "OK",
  headers: {
    "content-length": "2492",
    "content-type": "application/json; charset=utf-8",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: null,
    },
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    baseURL: "http://localhost:8000",
    method: "get",
    url: "/launches",
  },
  request: {},
};

export default httpGetLatestLaunches;
