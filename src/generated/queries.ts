import { useQuery, QueryConfig } from 'react-query'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

export type Query = {
  __typename?: 'Query'
  continents: Array<Continent>
  continent?: Maybe<Continent>
  countries: Array<Country>
  country?: Maybe<Country>
  languages: Array<Language>
  language?: Maybe<Language>
}

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>
}

export type QueryContinentArgs = {
  code: Scalars['ID']
}

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars['ID']
}

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>
}

export type QueryLanguageArgs = {
  code: Scalars['ID']
}

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type Continent = {
  __typename?: 'Continent'
  code: Scalars['ID']
  name: Scalars['String']
  countries: Array<Country>
}

export type Country = {
  __typename?: 'Country'
  code: Scalars['ID']
  name: Scalars['String']
  native: Scalars['String']
  phone: Scalars['String']
  continent: Continent
  capital?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  languages: Array<Language>
  emoji: Scalars['String']
  emojiU: Scalars['String']
  states: Array<State>
}

export type Language = {
  __typename?: 'Language'
  code: Scalars['ID']
  name?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  rtl: Scalars['Boolean']
}

export type State = {
  __typename?: 'State'
  code?: Maybe<Scalars['String']>
  name: Scalars['String']
  country: Country
}

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
  currency?: Maybe<StringQueryOperatorInput>
  continent?: Maybe<StringQueryOperatorInput>
}

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type FetchCountriesQueryVariables = Exact<{ [key: string]: never }>

export type FetchCountriesQuery = { __typename?: 'Query' } & {
  countries: Array<
    { __typename?: 'Country' } & Pick<Country, 'name' | 'currency' | 'emoji'>
  >
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
export const useFetchCountriesQuery = (
  variables?: FetchCountriesQueryVariables,
  options?: QueryConfig<FetchCountriesQuery>
) =>
  useQuery<FetchCountriesQuery>(
    ['fetchCountries', variables],
    fetcher<FetchCountriesQuery, FetchCountriesQueryVariables>(
      FetchCountriesDocument,
      variables
    ),
    options
  )
