import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Project'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000',
    }),
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: () => '/api/',
            // providesTags: ['Project']
            providesTags: (result, error, arg) =>
            result
                ? [
                      ...result.map(({ id }) => ({ type: "Project", id })),
                      "Project",
                  ]
                : ["Project"],
                
        }),
        getSingleProject: builder.query({
            query: (projectId) => `/api/${projectId}/`,
            providesTags: ['Project']
            //providesTags: (result, error, arg) => [{ type: "Project", id: arg}]
        }),
        addProject: builder.mutation({
            query: (data) => ({
              url: `/api/`,
              method: "POST",
              body: data
            }), 
            invalidatesTags: ['Project']
        }),
        editProject: builder.mutation({
          query: ({id, data}) => ({
            url: `/api/${id}/`,
            method: "PUT",
            body: data
          }),
        invalidatesTags:['Project'] 
        //   invalidatesTags: (result, error, arg) => [
        //     {type: 'Project', id: arg}
        //   ]
      }),
        
     deleteProject: builder.mutation({
            query: (id) => ({
                url: `/api/${id}/`,
                method: "DELETE",
              }), 
              invalidatesTags: ['Project']
            //   invalidatesTags: (result, error, arg) => [
            //     { type: "Project", id: arg },
            // ],
        })   
    }),
});

export const { useGetAllProjectsQuery, useGetSingleProjectQuery, useAddProjectMutation, useEditProjectMutation, useDeleteProjectMutation } = apiSlice;