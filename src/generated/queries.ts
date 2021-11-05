import { useQuery, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      ...{
        headers: {
          'Content-Type': 'application/json',
        },
      },
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Continent = {
  __typename?: 'Continent'
  code: Scalars['ID']
  countries: Array<Country>
  name: Scalars['String']
}

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Country = {
  __typename?: 'Country'
  capital?: Maybe<Scalars['String']>
  code: Scalars['ID']
  continent: Continent
  currency?: Maybe<Scalars['String']>
  emoji: Scalars['String']
  emojiU: Scalars['String']
  languages: Array<Language>
  name: Scalars['String']
  native: Scalars['String']
  phone: Scalars['String']
  states: Array<State>
}

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
  continent?: Maybe<StringQueryOperatorInput>
  currency?: Maybe<StringQueryOperatorInput>
}

export type Language = {
  __typename?: 'Language'
  code: Scalars['ID']
  name?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  rtl: Scalars['Boolean']
}

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Query = {
  __typename?: 'Query'
  continent?: Maybe<Continent>
  continents: Array<Continent>
  countries: Array<Country>
  country?: Maybe<Country>
  language?: Maybe<Language>
  languages: Array<Language>
}

export type QueryContinentArgs = {
  code: Scalars['ID']
}

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>
}

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars['ID']
}

export type QueryLanguageArgs = {
  code: Scalars['ID']
}

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>
}

export type State = {
  __typename?: 'State'
  code?: Maybe<Scalars['String']>
  country: Country
  name: Scalars['String']
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  ne?: Maybe<Scalars['String']>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
}

export type FetchCountriesQueryVariables = Exact<{ [key: string]: never }>

export type FetchCountriesQuery = {
  __typename?: 'Query'
  countries: Array<{
    __typename?: 'Country'
    name: string
    currency?: string | null | undefined
    emoji: string
  }>
}

export const FetchCountriesDocument = `
    query fetchCountries {
  countries {
    name
    currency
    emoji
  }
}
    `
export const useFetchCountriesQuery = <
  TData = FetchCountriesQuery,
  TError = unknown
>(
  variables?: FetchCountriesQueryVariables,
  options?: UseQueryOptions<FetchCountriesQuery, TError, TData>
) =>
  useQuery<FetchCountriesQuery, TError, TData>(
    variables === undefined
      ? ['fetchCountries']
      : ['fetchCountries', variables],
    fetcher<FetchCountriesQuery, FetchCountriesQueryVariables>(
      FetchCountriesDocument,
      variables
    ),
    options
  )
