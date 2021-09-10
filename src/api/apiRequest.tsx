export const API_URL = "https://snp-tests.herokuapp.com/api/v1";
export const SCOPE_KEY = "K'>+p/qs6Xp{W(P}";

export const COMMON_FETCH_OPTIONS = {
    headers: {
        Accept: "application/json, *.*",
        "Content-Type": "application/json; charset=utf-8",
        "scope-key": SCOPE_KEY,
    },
};

type Request = {
    path: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    body?: Record<string, unknown>;
};

const apiRequestBase = async ({ path, method, ...config }: Request) => {
    const response = await fetch(`${API_URL}/${path}`, {
        ...COMMON_FETCH_OPTIONS,
        method,
        body: config.body ? JSON.stringify(config.body) : undefined,
    });

    let data;

    if (response.status === 400) {
        data = await response.json();
        throw new Error(data.error);
    }

    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}, ${response.url}`);
    }

    try {
        data = await response.json();
    } catch (e) {
        data = null;
    }

    if (response.status === 500) {
        console.warn(response);
        return { response, parsedBody: null };
    }

    return {
        response,
        data,
    };
};

export const apiRequest = async (params: Request) => {
    const { data } = await apiRequestBase(params);
    return data;
};
