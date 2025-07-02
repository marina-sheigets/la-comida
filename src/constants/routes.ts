export const ROUTES = {
    RECIPES: "/",
    RECIPE: (id: string) => `/recipes/${id}`,
    CREATE_RECIPE: "/create-recipe",
    MY_COOKBOOK: "/my-cookbook",
    PROFILE: "/profile",
    EXPERTS: "/experts",
    EXPERT: (id: string) => `/experts/${id}`,
}