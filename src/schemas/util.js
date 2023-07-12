import {GraphQLError} from "graphql";

export function IsAuthenticated(contextValue) {
    if (!contextValue.LoggedIn) {
        throw new GraphQLError('User is not authenticated', {
            extensions: {
                code: 'UNAUTHENTICATED',
                http: { status: 401 },
            },
        });
    }
}