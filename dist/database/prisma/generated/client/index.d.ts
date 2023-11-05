
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Pergunta
 * 
 */
export type Pergunta = $Result.DefaultSelection<Prisma.$PerguntaPayload>
/**
 * Model Pergunta_Respota
 * 
 */
export type Pergunta_Respota = $Result.DefaultSelection<Prisma.$Pergunta_RespotaPayload>
/**
 * Model Resposta
 * 
 */
export type Resposta = $Result.DefaultSelection<Prisma.$RespostaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Pontuacacao
 * 
 */
export type Pontuacacao = $Result.DefaultSelection<Prisma.$PontuacacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Quizzes
 * const quizzes = await prisma.quiz.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Quizzes
   * const quizzes = await prisma.quiz.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs>;

  /**
   * `prisma.pergunta`: Exposes CRUD operations for the **Pergunta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perguntas
    * const perguntas = await prisma.pergunta.findMany()
    * ```
    */
  get pergunta(): Prisma.PerguntaDelegate<ExtArgs>;

  /**
   * `prisma.pergunta_Respota`: Exposes CRUD operations for the **Pergunta_Respota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pergunta_Respotas
    * const pergunta_Respotas = await prisma.pergunta_Respota.findMany()
    * ```
    */
  get pergunta_Respota(): Prisma.Pergunta_RespotaDelegate<ExtArgs>;

  /**
   * `prisma.resposta`: Exposes CRUD operations for the **Resposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas
    * const respostas = await prisma.resposta.findMany()
    * ```
    */
  get resposta(): Prisma.RespostaDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.pontuacacao`: Exposes CRUD operations for the **Pontuacacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pontuacacaos
    * const pontuacacaos = await prisma.pontuacacao.findMany()
    * ```
    */
  get pontuacacao(): Prisma.PontuacacaoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Quiz: 'Quiz',
    Pergunta: 'Pergunta',
    Pergunta_Respota: 'Pergunta_Respota',
    Resposta: 'Resposta',
    Usuario: 'Usuario',
    Pontuacacao: 'Pontuacacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'quiz' | 'pergunta' | 'pergunta_Respota' | 'resposta' | 'usuario' | 'pontuacacao'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>,
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Pergunta: {
        payload: Prisma.$PerguntaPayload<ExtArgs>
        fields: Prisma.PerguntaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerguntaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerguntaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findFirst: {
            args: Prisma.PerguntaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerguntaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findMany: {
            args: Prisma.PerguntaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          create: {
            args: Prisma.PerguntaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          createMany: {
            args: Prisma.PerguntaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PerguntaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          update: {
            args: Prisma.PerguntaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          deleteMany: {
            args: Prisma.PerguntaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PerguntaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PerguntaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          aggregate: {
            args: Prisma.PerguntaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePergunta>
          }
          groupBy: {
            args: Prisma.PerguntaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PerguntaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerguntaCountArgs<ExtArgs>,
            result: $Utils.Optional<PerguntaCountAggregateOutputType> | number
          }
        }
      }
      Pergunta_Respota: {
        payload: Prisma.$Pergunta_RespotaPayload<ExtArgs>
        fields: Prisma.Pergunta_RespotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Pergunta_RespotaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Pergunta_RespotaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          findFirst: {
            args: Prisma.Pergunta_RespotaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Pergunta_RespotaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          findMany: {
            args: Prisma.Pergunta_RespotaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>[]
          }
          create: {
            args: Prisma.Pergunta_RespotaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          createMany: {
            args: Prisma.Pergunta_RespotaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Pergunta_RespotaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          update: {
            args: Prisma.Pergunta_RespotaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          deleteMany: {
            args: Prisma.Pergunta_RespotaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Pergunta_RespotaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Pergunta_RespotaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Pergunta_RespotaPayload>
          }
          aggregate: {
            args: Prisma.Pergunta_RespotaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePergunta_Respota>
          }
          groupBy: {
            args: Prisma.Pergunta_RespotaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Pergunta_RespotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Pergunta_RespotaCountArgs<ExtArgs>,
            result: $Utils.Optional<Pergunta_RespotaCountAggregateOutputType> | number
          }
        }
      }
      Resposta: {
        payload: Prisma.$RespostaPayload<ExtArgs>
        fields: Prisma.RespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespostaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespostaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findFirst: {
            args: Prisma.RespostaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespostaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findMany: {
            args: Prisma.RespostaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>[]
          }
          create: {
            args: Prisma.RespostaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          createMany: {
            args: Prisma.RespostaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RespostaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          update: {
            args: Prisma.RespostaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          deleteMany: {
            args: Prisma.RespostaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RespostaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RespostaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          aggregate: {
            args: Prisma.RespostaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResposta>
          }
          groupBy: {
            args: Prisma.RespostaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespostaCountArgs<ExtArgs>,
            result: $Utils.Optional<RespostaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Pontuacacao: {
        payload: Prisma.$PontuacacaoPayload<ExtArgs>
        fields: Prisma.PontuacacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PontuacacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PontuacacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          findFirst: {
            args: Prisma.PontuacacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PontuacacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          findMany: {
            args: Prisma.PontuacacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>[]
          }
          create: {
            args: Prisma.PontuacacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          createMany: {
            args: Prisma.PontuacacaoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PontuacacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          update: {
            args: Prisma.PontuacacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          deleteMany: {
            args: Prisma.PontuacacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PontuacacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PontuacacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PontuacacaoPayload>
          }
          aggregate: {
            args: Prisma.PontuacacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePontuacacao>
          }
          groupBy: {
            args: Prisma.PontuacacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PontuacacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PontuacacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<PontuacacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    Pontuacacao: number
    Pergunta_Respota: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pontuacacao?: boolean | QuizCountOutputTypeCountPontuacacaoArgs
    Pergunta_Respota?: boolean | QuizCountOutputTypeCountPergunta_RespotaArgs
  }

  // Custom InputTypes

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountPontuacacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacacaoWhereInput
  }


  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountPergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pergunta_RespotaWhereInput
  }



  /**
   * Count Type PerguntaCountOutputType
   */

  export type PerguntaCountOutputType = {
    Pergunta_Respota: number
  }

  export type PerguntaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pergunta_Respota?: boolean | PerguntaCountOutputTypeCountPergunta_RespotaArgs
  }

  // Custom InputTypes

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCountOutputType
     */
    select?: PerguntaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountPergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pergunta_RespotaWhereInput
  }



  /**
   * Count Type RespostaCountOutputType
   */

  export type RespostaCountOutputType = {
    Pergunta_Respota: number
  }

  export type RespostaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pergunta_Respota?: boolean | RespostaCountOutputTypeCountPergunta_RespotaArgs
  }

  // Custom InputTypes

  /**
   * RespostaCountOutputType without action
   */
  export type RespostaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespostaCountOutputType
     */
    select?: RespostaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RespostaCountOutputType without action
   */
  export type RespostaCountOutputTypeCountPergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pergunta_RespotaWhereInput
  }



  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    meusPontos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meusPontos?: boolean | UsuarioCountOutputTypeCountMeusPontosArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMeusPontosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacacaoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    nome: string
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    Pontuacacao?: boolean | Quiz$PontuacacaoArgs<ExtArgs>
    Pergunta_Respota?: boolean | Quiz$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pontuacacao?: boolean | Quiz$PontuacacaoArgs<ExtArgs>
    Pergunta_Respota?: boolean | Quiz$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      Pontuacacao: Prisma.$PontuacacaoPayload<ExtArgs>[]
      Pergunta_Respota: Prisma.$Pergunta_RespotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }


  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizFindManyArgs, 'select' | 'include'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
    **/
    create<T extends QuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizCreateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quizzes.
     *     @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     *     @example
     *     // Create many Quizzes
     *     const quiz = await prisma.quiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
    **/
    delete<T extends QuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
    **/
    upsert<T extends QuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pontuacacao<T extends Quiz$PontuacacaoArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$PontuacacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    Pergunta_Respota<T extends Quiz$Pergunta_RespotaArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$Pergunta_RespotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quiz model
   */ 
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly nome: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }


  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }


  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz.Pontuacacao
   */
  export type Quiz$PontuacacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    where?: PontuacacaoWhereInput
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    cursor?: PontuacacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PontuacacaoScalarFieldEnum | PontuacacaoScalarFieldEnum[]
  }


  /**
   * Quiz.Pergunta_Respota
   */
  export type Quiz$Pergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    where?: Pergunta_RespotaWhereInput
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    cursor?: Pergunta_RespotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
  }



  /**
   * Model Pergunta
   */

  export type AggregatePergunta = {
    _count: PerguntaCountAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  export type PerguntaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    quizId: string | null
  }

  export type PerguntaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    quizId: string | null
  }

  export type PerguntaCountAggregateOutputType = {
    id: number
    titulo: number
    quizId: number
    _all: number
  }


  export type PerguntaMinAggregateInputType = {
    id?: true
    titulo?: true
    quizId?: true
  }

  export type PerguntaMaxAggregateInputType = {
    id?: true
    titulo?: true
    quizId?: true
  }

  export type PerguntaCountAggregateInputType = {
    id?: true
    titulo?: true
    quizId?: true
    _all?: true
  }

  export type PerguntaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pergunta to aggregate.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perguntas
    **/
    _count?: true | PerguntaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerguntaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerguntaMaxAggregateInputType
  }

  export type GetPerguntaAggregateType<T extends PerguntaAggregateArgs> = {
        [P in keyof T & keyof AggregatePergunta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePergunta[P]>
      : GetScalarType<T[P], AggregatePergunta[P]>
  }




  export type PerguntaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaWhereInput
    orderBy?: PerguntaOrderByWithAggregationInput | PerguntaOrderByWithAggregationInput[]
    by: PerguntaScalarFieldEnum[] | PerguntaScalarFieldEnum
    having?: PerguntaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerguntaCountAggregateInputType | true
    _min?: PerguntaMinAggregateInputType
    _max?: PerguntaMaxAggregateInputType
  }

  export type PerguntaGroupByOutputType = {
    id: string
    titulo: string
    quizId: string | null
    _count: PerguntaCountAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  type GetPerguntaGroupByPayload<T extends PerguntaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerguntaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerguntaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
            : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
        }
      >
    >


  export type PerguntaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    quizId?: boolean
    Pergunta_Respota?: boolean | Pergunta$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectScalar = {
    id?: boolean
    titulo?: boolean
    quizId?: boolean
  }

  export type PerguntaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pergunta_Respota?: boolean | Pergunta$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PerguntaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pergunta"
    objects: {
      Pergunta_Respota: Prisma.$Pergunta_RespotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      quizId: string | null
    }, ExtArgs["result"]["pergunta"]>
    composites: {}
  }


  type PerguntaGetPayload<S extends boolean | null | undefined | PerguntaDefaultArgs> = $Result.GetResult<Prisma.$PerguntaPayload, S>

  type PerguntaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PerguntaFindManyArgs, 'select' | 'include'> & {
      select?: PerguntaCountAggregateInputType | true
    }

  export interface PerguntaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pergunta'], meta: { name: 'Pergunta' } }
    /**
     * Find zero or one Pergunta that matches the filter.
     * @param {PerguntaFindUniqueArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PerguntaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaFindUniqueArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pergunta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PerguntaFindUniqueOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PerguntaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pergunta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PerguntaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaFindFirstArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pergunta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PerguntaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Perguntas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perguntas
     * const perguntas = await prisma.pergunta.findMany()
     * 
     * // Get first 10 Perguntas
     * const perguntas = await prisma.pergunta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perguntaWithIdOnly = await prisma.pergunta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PerguntaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pergunta.
     * @param {PerguntaCreateArgs} args - Arguments to create a Pergunta.
     * @example
     * // Create one Pergunta
     * const Pergunta = await prisma.pergunta.create({
     *   data: {
     *     // ... data to create a Pergunta
     *   }
     * })
     * 
    **/
    create<T extends PerguntaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaCreateArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Perguntas.
     *     @param {PerguntaCreateManyArgs} args - Arguments to create many Perguntas.
     *     @example
     *     // Create many Perguntas
     *     const pergunta = await prisma.pergunta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PerguntaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pergunta.
     * @param {PerguntaDeleteArgs} args - Arguments to delete one Pergunta.
     * @example
     * // Delete one Pergunta
     * const Pergunta = await prisma.pergunta.delete({
     *   where: {
     *     // ... filter to delete one Pergunta
     *   }
     * })
     * 
    **/
    delete<T extends PerguntaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaDeleteArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pergunta.
     * @param {PerguntaUpdateArgs} args - Arguments to update one Pergunta.
     * @example
     * // Update one Pergunta
     * const pergunta = await prisma.pergunta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PerguntaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaUpdateArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Perguntas.
     * @param {PerguntaDeleteManyArgs} args - Arguments to filter Perguntas to delete.
     * @example
     * // Delete a few Perguntas
     * const { count } = await prisma.pergunta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PerguntaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerguntaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perguntas
     * const pergunta = await prisma.pergunta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PerguntaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pergunta.
     * @param {PerguntaUpsertArgs} args - Arguments to update or create a Pergunta.
     * @example
     * // Update or create a Pergunta
     * const pergunta = await prisma.pergunta.upsert({
     *   create: {
     *     // ... data to create a Pergunta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pergunta we want to update
     *   }
     * })
    **/
    upsert<T extends PerguntaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PerguntaUpsertArgs<ExtArgs>>
    ): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCountArgs} args - Arguments to filter Perguntas to count.
     * @example
     * // Count the number of Perguntas
     * const count = await prisma.pergunta.count({
     *   where: {
     *     // ... the filter for the Perguntas we want to count
     *   }
     * })
    **/
    count<T extends PerguntaCountArgs>(
      args?: Subset<T, PerguntaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerguntaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerguntaAggregateArgs>(args: Subset<T, PerguntaAggregateArgs>): Prisma.PrismaPromise<GetPerguntaAggregateType<T>>

    /**
     * Group by Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerguntaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerguntaGroupByArgs['orderBy'] }
        : { orderBy?: PerguntaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerguntaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerguntaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pergunta model
   */
  readonly fields: PerguntaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pergunta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerguntaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pergunta_Respota<T extends Pergunta$Pergunta_RespotaArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$Pergunta_RespotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pergunta model
   */ 
  interface PerguntaFieldRefs {
    readonly id: FieldRef<"Pergunta", 'String'>
    readonly titulo: FieldRef<"Pergunta", 'String'>
    readonly quizId: FieldRef<"Pergunta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Pergunta findUnique
   */
  export type PerguntaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }


  /**
   * Pergunta findUniqueOrThrow
   */
  export type PerguntaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }


  /**
   * Pergunta findFirst
   */
  export type PerguntaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }


  /**
   * Pergunta findFirstOrThrow
   */
  export type PerguntaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }


  /**
   * Pergunta findMany
   */
  export type PerguntaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Perguntas to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }


  /**
   * Pergunta create
   */
  export type PerguntaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pergunta.
     */
    data: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
  }


  /**
   * Pergunta createMany
   */
  export type PerguntaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perguntas.
     */
    data: PerguntaCreateManyInput | PerguntaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pergunta update
   */
  export type PerguntaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pergunta.
     */
    data: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
    /**
     * Choose, which Pergunta to update.
     */
    where: PerguntaWhereUniqueInput
  }


  /**
   * Pergunta updateMany
   */
  export type PerguntaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perguntas.
     */
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyInput>
    /**
     * Filter which Perguntas to update
     */
    where?: PerguntaWhereInput
  }


  /**
   * Pergunta upsert
   */
  export type PerguntaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pergunta to update in case it exists.
     */
    where: PerguntaWhereUniqueInput
    /**
     * In case the Pergunta found by the `where` argument doesn't exist, create a new Pergunta with this data.
     */
    create: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
    /**
     * In case the Pergunta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
  }


  /**
   * Pergunta delete
   */
  export type PerguntaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter which Pergunta to delete.
     */
    where: PerguntaWhereUniqueInput
  }


  /**
   * Pergunta deleteMany
   */
  export type PerguntaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perguntas to delete
     */
    where?: PerguntaWhereInput
  }


  /**
   * Pergunta.Pergunta_Respota
   */
  export type Pergunta$Pergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    where?: Pergunta_RespotaWhereInput
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    cursor?: Pergunta_RespotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Pergunta without action
   */
  export type PerguntaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerguntaInclude<ExtArgs> | null
  }



  /**
   * Model Pergunta_Respota
   */

  export type AggregatePergunta_Respota = {
    _count: Pergunta_RespotaCountAggregateOutputType | null
    _min: Pergunta_RespotaMinAggregateOutputType | null
    _max: Pergunta_RespotaMaxAggregateOutputType | null
  }

  export type Pergunta_RespotaMinAggregateOutputType = {
    id: string | null
    resultado: boolean | null
    perguntaId: string | null
    respostaId: string | null
    quizId: string | null
  }

  export type Pergunta_RespotaMaxAggregateOutputType = {
    id: string | null
    resultado: boolean | null
    perguntaId: string | null
    respostaId: string | null
    quizId: string | null
  }

  export type Pergunta_RespotaCountAggregateOutputType = {
    id: number
    resultado: number
    perguntaId: number
    respostaId: number
    quizId: number
    _all: number
  }


  export type Pergunta_RespotaMinAggregateInputType = {
    id?: true
    resultado?: true
    perguntaId?: true
    respostaId?: true
    quizId?: true
  }

  export type Pergunta_RespotaMaxAggregateInputType = {
    id?: true
    resultado?: true
    perguntaId?: true
    respostaId?: true
    quizId?: true
  }

  export type Pergunta_RespotaCountAggregateInputType = {
    id?: true
    resultado?: true
    perguntaId?: true
    respostaId?: true
    quizId?: true
    _all?: true
  }

  export type Pergunta_RespotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pergunta_Respota to aggregate.
     */
    where?: Pergunta_RespotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pergunta_Respotas to fetch.
     */
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Pergunta_RespotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pergunta_Respotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pergunta_Respotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pergunta_Respotas
    **/
    _count?: true | Pergunta_RespotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pergunta_RespotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pergunta_RespotaMaxAggregateInputType
  }

  export type GetPergunta_RespotaAggregateType<T extends Pergunta_RespotaAggregateArgs> = {
        [P in keyof T & keyof AggregatePergunta_Respota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePergunta_Respota[P]>
      : GetScalarType<T[P], AggregatePergunta_Respota[P]>
  }




  export type Pergunta_RespotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pergunta_RespotaWhereInput
    orderBy?: Pergunta_RespotaOrderByWithAggregationInput | Pergunta_RespotaOrderByWithAggregationInput[]
    by: Pergunta_RespotaScalarFieldEnum[] | Pergunta_RespotaScalarFieldEnum
    having?: Pergunta_RespotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pergunta_RespotaCountAggregateInputType | true
    _min?: Pergunta_RespotaMinAggregateInputType
    _max?: Pergunta_RespotaMaxAggregateInputType
  }

  export type Pergunta_RespotaGroupByOutputType = {
    id: string
    resultado: boolean
    perguntaId: string
    respostaId: string
    quizId: string
    _count: Pergunta_RespotaCountAggregateOutputType | null
    _min: Pergunta_RespotaMinAggregateOutputType | null
    _max: Pergunta_RespotaMaxAggregateOutputType | null
  }

  type GetPergunta_RespotaGroupByPayload<T extends Pergunta_RespotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pergunta_RespotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pergunta_RespotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pergunta_RespotaGroupByOutputType[P]>
            : GetScalarType<T[P], Pergunta_RespotaGroupByOutputType[P]>
        }
      >
    >


  export type Pergunta_RespotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultado?: boolean
    perguntaId?: boolean
    respostaId?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
    resposta?: boolean | RespostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta_Respota"]>

  export type Pergunta_RespotaSelectScalar = {
    id?: boolean
    resultado?: boolean
    perguntaId?: boolean
    respostaId?: boolean
    quizId?: boolean
  }

  export type Pergunta_RespotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
    resposta?: boolean | RespostaDefaultArgs<ExtArgs>
  }


  export type $Pergunta_RespotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pergunta_Respota"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      pergunta: Prisma.$PerguntaPayload<ExtArgs>
      resposta: Prisma.$RespostaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resultado: boolean
      perguntaId: string
      respostaId: string
      quizId: string
    }, ExtArgs["result"]["pergunta_Respota"]>
    composites: {}
  }


  type Pergunta_RespotaGetPayload<S extends boolean | null | undefined | Pergunta_RespotaDefaultArgs> = $Result.GetResult<Prisma.$Pergunta_RespotaPayload, S>

  type Pergunta_RespotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Pergunta_RespotaFindManyArgs, 'select' | 'include'> & {
      select?: Pergunta_RespotaCountAggregateInputType | true
    }

  export interface Pergunta_RespotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pergunta_Respota'], meta: { name: 'Pergunta_Respota' } }
    /**
     * Find zero or one Pergunta_Respota that matches the filter.
     * @param {Pergunta_RespotaFindUniqueArgs} args - Arguments to find a Pergunta_Respota
     * @example
     * // Get one Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Pergunta_RespotaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaFindUniqueArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pergunta_Respota that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Pergunta_RespotaFindUniqueOrThrowArgs} args - Arguments to find a Pergunta_Respota
     * @example
     * // Get one Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Pergunta_RespotaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pergunta_Respota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaFindFirstArgs} args - Arguments to find a Pergunta_Respota
     * @example
     * // Get one Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Pergunta_RespotaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaFindFirstArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pergunta_Respota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaFindFirstOrThrowArgs} args - Arguments to find a Pergunta_Respota
     * @example
     * // Get one Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Pergunta_RespotaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pergunta_Respotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pergunta_Respotas
     * const pergunta_Respotas = await prisma.pergunta_Respota.findMany()
     * 
     * // Get first 10 Pergunta_Respotas
     * const pergunta_Respotas = await prisma.pergunta_Respota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pergunta_RespotaWithIdOnly = await prisma.pergunta_Respota.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Pergunta_RespotaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pergunta_Respota.
     * @param {Pergunta_RespotaCreateArgs} args - Arguments to create a Pergunta_Respota.
     * @example
     * // Create one Pergunta_Respota
     * const Pergunta_Respota = await prisma.pergunta_Respota.create({
     *   data: {
     *     // ... data to create a Pergunta_Respota
     *   }
     * })
     * 
    **/
    create<T extends Pergunta_RespotaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaCreateArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pergunta_Respotas.
     *     @param {Pergunta_RespotaCreateManyArgs} args - Arguments to create many Pergunta_Respotas.
     *     @example
     *     // Create many Pergunta_Respotas
     *     const pergunta_Respota = await prisma.pergunta_Respota.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Pergunta_RespotaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pergunta_Respota.
     * @param {Pergunta_RespotaDeleteArgs} args - Arguments to delete one Pergunta_Respota.
     * @example
     * // Delete one Pergunta_Respota
     * const Pergunta_Respota = await prisma.pergunta_Respota.delete({
     *   where: {
     *     // ... filter to delete one Pergunta_Respota
     *   }
     * })
     * 
    **/
    delete<T extends Pergunta_RespotaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaDeleteArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pergunta_Respota.
     * @param {Pergunta_RespotaUpdateArgs} args - Arguments to update one Pergunta_Respota.
     * @example
     * // Update one Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Pergunta_RespotaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaUpdateArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pergunta_Respotas.
     * @param {Pergunta_RespotaDeleteManyArgs} args - Arguments to filter Pergunta_Respotas to delete.
     * @example
     * // Delete a few Pergunta_Respotas
     * const { count } = await prisma.pergunta_Respota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Pergunta_RespotaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Pergunta_RespotaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pergunta_Respotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pergunta_Respotas
     * const pergunta_Respota = await prisma.pergunta_Respota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Pergunta_RespotaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pergunta_Respota.
     * @param {Pergunta_RespotaUpsertArgs} args - Arguments to update or create a Pergunta_Respota.
     * @example
     * // Update or create a Pergunta_Respota
     * const pergunta_Respota = await prisma.pergunta_Respota.upsert({
     *   create: {
     *     // ... data to create a Pergunta_Respota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pergunta_Respota we want to update
     *   }
     * })
    **/
    upsert<T extends Pergunta_RespotaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Pergunta_RespotaUpsertArgs<ExtArgs>>
    ): Prisma__Pergunta_RespotaClient<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pergunta_Respotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaCountArgs} args - Arguments to filter Pergunta_Respotas to count.
     * @example
     * // Count the number of Pergunta_Respotas
     * const count = await prisma.pergunta_Respota.count({
     *   where: {
     *     // ... the filter for the Pergunta_Respotas we want to count
     *   }
     * })
    **/
    count<T extends Pergunta_RespotaCountArgs>(
      args?: Subset<T, Pergunta_RespotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pergunta_RespotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pergunta_Respota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pergunta_RespotaAggregateArgs>(args: Subset<T, Pergunta_RespotaAggregateArgs>): Prisma.PrismaPromise<GetPergunta_RespotaAggregateType<T>>

    /**
     * Group by Pergunta_Respota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pergunta_RespotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pergunta_RespotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pergunta_RespotaGroupByArgs['orderBy'] }
        : { orderBy?: Pergunta_RespotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pergunta_RespotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPergunta_RespotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pergunta_Respota model
   */
  readonly fields: Pergunta_RespotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pergunta_Respota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Pergunta_RespotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pergunta<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    resposta<T extends RespostaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RespostaDefaultArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pergunta_Respota model
   */ 
  interface Pergunta_RespotaFieldRefs {
    readonly id: FieldRef<"Pergunta_Respota", 'String'>
    readonly resultado: FieldRef<"Pergunta_Respota", 'Boolean'>
    readonly perguntaId: FieldRef<"Pergunta_Respota", 'String'>
    readonly respostaId: FieldRef<"Pergunta_Respota", 'String'>
    readonly quizId: FieldRef<"Pergunta_Respota", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Pergunta_Respota findUnique
   */
  export type Pergunta_RespotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta_Respota to fetch.
     */
    where: Pergunta_RespotaWhereUniqueInput
  }


  /**
   * Pergunta_Respota findUniqueOrThrow
   */
  export type Pergunta_RespotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta_Respota to fetch.
     */
    where: Pergunta_RespotaWhereUniqueInput
  }


  /**
   * Pergunta_Respota findFirst
   */
  export type Pergunta_RespotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta_Respota to fetch.
     */
    where?: Pergunta_RespotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pergunta_Respotas to fetch.
     */
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pergunta_Respotas.
     */
    cursor?: Pergunta_RespotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pergunta_Respotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pergunta_Respotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pergunta_Respotas.
     */
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Pergunta_Respota findFirstOrThrow
   */
  export type Pergunta_RespotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta_Respota to fetch.
     */
    where?: Pergunta_RespotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pergunta_Respotas to fetch.
     */
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pergunta_Respotas.
     */
    cursor?: Pergunta_RespotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pergunta_Respotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pergunta_Respotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pergunta_Respotas.
     */
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Pergunta_Respota findMany
   */
  export type Pergunta_RespotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta_Respotas to fetch.
     */
    where?: Pergunta_RespotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pergunta_Respotas to fetch.
     */
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pergunta_Respotas.
     */
    cursor?: Pergunta_RespotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pergunta_Respotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pergunta_Respotas.
     */
    skip?: number
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Pergunta_Respota create
   */
  export type Pergunta_RespotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pergunta_Respota.
     */
    data: XOR<Pergunta_RespotaCreateInput, Pergunta_RespotaUncheckedCreateInput>
  }


  /**
   * Pergunta_Respota createMany
   */
  export type Pergunta_RespotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pergunta_Respotas.
     */
    data: Pergunta_RespotaCreateManyInput | Pergunta_RespotaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pergunta_Respota update
   */
  export type Pergunta_RespotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pergunta_Respota.
     */
    data: XOR<Pergunta_RespotaUpdateInput, Pergunta_RespotaUncheckedUpdateInput>
    /**
     * Choose, which Pergunta_Respota to update.
     */
    where: Pergunta_RespotaWhereUniqueInput
  }


  /**
   * Pergunta_Respota updateMany
   */
  export type Pergunta_RespotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pergunta_Respotas.
     */
    data: XOR<Pergunta_RespotaUpdateManyMutationInput, Pergunta_RespotaUncheckedUpdateManyInput>
    /**
     * Filter which Pergunta_Respotas to update
     */
    where?: Pergunta_RespotaWhereInput
  }


  /**
   * Pergunta_Respota upsert
   */
  export type Pergunta_RespotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pergunta_Respota to update in case it exists.
     */
    where: Pergunta_RespotaWhereUniqueInput
    /**
     * In case the Pergunta_Respota found by the `where` argument doesn't exist, create a new Pergunta_Respota with this data.
     */
    create: XOR<Pergunta_RespotaCreateInput, Pergunta_RespotaUncheckedCreateInput>
    /**
     * In case the Pergunta_Respota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Pergunta_RespotaUpdateInput, Pergunta_RespotaUncheckedUpdateInput>
  }


  /**
   * Pergunta_Respota delete
   */
  export type Pergunta_RespotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    /**
     * Filter which Pergunta_Respota to delete.
     */
    where: Pergunta_RespotaWhereUniqueInput
  }


  /**
   * Pergunta_Respota deleteMany
   */
  export type Pergunta_RespotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pergunta_Respotas to delete
     */
    where?: Pergunta_RespotaWhereInput
  }


  /**
   * Pergunta_Respota without action
   */
  export type Pergunta_RespotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
  }



  /**
   * Model Resposta
   */

  export type AggregateResposta = {
    _count: RespostaCountAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  export type RespostaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type RespostaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type RespostaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type RespostaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type RespostaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type RespostaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type RespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resposta to aggregate.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respostas
    **/
    _count?: true | RespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespostaMaxAggregateInputType
  }

  export type GetRespostaAggregateType<T extends RespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResposta[P]>
      : GetScalarType<T[P], AggregateResposta[P]>
  }




  export type RespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaWhereInput
    orderBy?: RespostaOrderByWithAggregationInput | RespostaOrderByWithAggregationInput[]
    by: RespostaScalarFieldEnum[] | RespostaScalarFieldEnum
    having?: RespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespostaCountAggregateInputType | true
    _min?: RespostaMinAggregateInputType
    _max?: RespostaMaxAggregateInputType
  }

  export type RespostaGroupByOutputType = {
    id: string
    descricao: string
    _count: RespostaCountAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  type GetRespostaGroupByPayload<T extends RespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespostaGroupByOutputType[P]>
            : GetScalarType<T[P], RespostaGroupByOutputType[P]>
        }
      >
    >


  export type RespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    Pergunta_Respota?: boolean | Resposta$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | RespostaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>

  export type RespostaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type RespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pergunta_Respota?: boolean | Resposta$Pergunta_RespotaArgs<ExtArgs>
    _count?: boolean | RespostaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resposta"
    objects: {
      Pergunta_Respota: Prisma.$Pergunta_RespotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
    }, ExtArgs["result"]["resposta"]>
    composites: {}
  }


  type RespostaGetPayload<S extends boolean | null | undefined | RespostaDefaultArgs> = $Result.GetResult<Prisma.$RespostaPayload, S>

  type RespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RespostaFindManyArgs, 'select' | 'include'> & {
      select?: RespostaCountAggregateInputType | true
    }

  export interface RespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resposta'], meta: { name: 'Resposta' } }
    /**
     * Find zero or one Resposta that matches the filter.
     * @param {RespostaFindUniqueArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RespostaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaFindUniqueArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Resposta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RespostaFindUniqueOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RespostaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Resposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RespostaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaFindFirstArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Resposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RespostaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respostas
     * const respostas = await prisma.resposta.findMany()
     * 
     * // Get first 10 Respostas
     * const respostas = await prisma.resposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respostaWithIdOnly = await prisma.resposta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RespostaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Resposta.
     * @param {RespostaCreateArgs} args - Arguments to create a Resposta.
     * @example
     * // Create one Resposta
     * const Resposta = await prisma.resposta.create({
     *   data: {
     *     // ... data to create a Resposta
     *   }
     * })
     * 
    **/
    create<T extends RespostaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaCreateArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Respostas.
     *     @param {RespostaCreateManyArgs} args - Arguments to create many Respostas.
     *     @example
     *     // Create many Respostas
     *     const resposta = await prisma.resposta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RespostaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resposta.
     * @param {RespostaDeleteArgs} args - Arguments to delete one Resposta.
     * @example
     * // Delete one Resposta
     * const Resposta = await prisma.resposta.delete({
     *   where: {
     *     // ... filter to delete one Resposta
     *   }
     * })
     * 
    **/
    delete<T extends RespostaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaDeleteArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Resposta.
     * @param {RespostaUpdateArgs} args - Arguments to update one Resposta.
     * @example
     * // Update one Resposta
     * const resposta = await prisma.resposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RespostaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaUpdateArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Respostas.
     * @param {RespostaDeleteManyArgs} args - Arguments to filter Respostas to delete.
     * @example
     * // Delete a few Respostas
     * const { count } = await prisma.resposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RespostaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespostaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respostas
     * const resposta = await prisma.resposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RespostaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resposta.
     * @param {RespostaUpsertArgs} args - Arguments to update or create a Resposta.
     * @example
     * // Update or create a Resposta
     * const resposta = await prisma.resposta.upsert({
     *   create: {
     *     // ... data to create a Resposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resposta we want to update
     *   }
     * })
    **/
    upsert<T extends RespostaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RespostaUpsertArgs<ExtArgs>>
    ): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaCountArgs} args - Arguments to filter Respostas to count.
     * @example
     * // Count the number of Respostas
     * const count = await prisma.resposta.count({
     *   where: {
     *     // ... the filter for the Respostas we want to count
     *   }
     * })
    **/
    count<T extends RespostaCountArgs>(
      args?: Subset<T, RespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RespostaAggregateArgs>(args: Subset<T, RespostaAggregateArgs>): Prisma.PrismaPromise<GetRespostaAggregateType<T>>

    /**
     * Group by Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespostaGroupByArgs['orderBy'] }
        : { orderBy?: RespostaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resposta model
   */
  readonly fields: RespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pergunta_Respota<T extends Resposta$Pergunta_RespotaArgs<ExtArgs> = {}>(args?: Subset<T, Resposta$Pergunta_RespotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pergunta_RespotaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Resposta model
   */ 
  interface RespostaFieldRefs {
    readonly id: FieldRef<"Resposta", 'String'>
    readonly descricao: FieldRef<"Resposta", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Resposta findUnique
   */
  export type RespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }


  /**
   * Resposta findUniqueOrThrow
   */
  export type RespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }


  /**
   * Resposta findFirst
   */
  export type RespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }


  /**
   * Resposta findFirstOrThrow
   */
  export type RespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }


  /**
   * Resposta findMany
   */
  export type RespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }


  /**
   * Resposta create
   */
  export type RespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resposta.
     */
    data: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
  }


  /**
   * Resposta createMany
   */
  export type RespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respostas.
     */
    data: RespostaCreateManyInput | RespostaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Resposta update
   */
  export type RespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resposta.
     */
    data: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
    /**
     * Choose, which Resposta to update.
     */
    where: RespostaWhereUniqueInput
  }


  /**
   * Resposta updateMany
   */
  export type RespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostaWhereInput
  }


  /**
   * Resposta upsert
   */
  export type RespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resposta to update in case it exists.
     */
    where: RespostaWhereUniqueInput
    /**
     * In case the Resposta found by the `where` argument doesn't exist, create a new Resposta with this data.
     */
    create: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
    /**
     * In case the Resposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
  }


  /**
   * Resposta delete
   */
  export type RespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter which Resposta to delete.
     */
    where: RespostaWhereUniqueInput
  }


  /**
   * Resposta deleteMany
   */
  export type RespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respostas to delete
     */
    where?: RespostaWhereInput
  }


  /**
   * Resposta.Pergunta_Respota
   */
  export type Resposta$Pergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta_Respota
     */
    select?: Pergunta_RespotaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Pergunta_RespotaInclude<ExtArgs> | null
    where?: Pergunta_RespotaWhereInput
    orderBy?: Pergunta_RespotaOrderByWithRelationInput | Pergunta_RespotaOrderByWithRelationInput[]
    cursor?: Pergunta_RespotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pergunta_RespotaScalarFieldEnum | Pergunta_RespotaScalarFieldEnum[]
  }


  /**
   * Resposta without action
   */
  export type RespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespostaInclude<ExtArgs> | null
  }



  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    tipo: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    meusPontos?: boolean | Usuario$meusPontosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meusPontos?: boolean | Usuario$meusPontosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      meusPontos: Prisma.$PontuacacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      tipo: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    meusPontos<T extends Usuario$meusPontosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$meusPontosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario.meusPontos
   */
  export type Usuario$meusPontosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    where?: PontuacacaoWhereInput
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    cursor?: PontuacacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PontuacacaoScalarFieldEnum | PontuacacaoScalarFieldEnum[]
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Pontuacacao
   */

  export type AggregatePontuacacao = {
    _count: PontuacacaoCountAggregateOutputType | null
    _avg: PontuacacaoAvgAggregateOutputType | null
    _sum: PontuacacaoSumAggregateOutputType | null
    _min: PontuacacaoMinAggregateOutputType | null
    _max: PontuacacaoMaxAggregateOutputType | null
  }

  export type PontuacacaoAvgAggregateOutputType = {
    pontuacao: number | null
  }

  export type PontuacacaoSumAggregateOutputType = {
    pontuacao: number | null
  }

  export type PontuacacaoMinAggregateOutputType = {
    id: string | null
    pontuacao: number | null
    usuarioId: string | null
    quizId: string | null
  }

  export type PontuacacaoMaxAggregateOutputType = {
    id: string | null
    pontuacao: number | null
    usuarioId: string | null
    quizId: string | null
  }

  export type PontuacacaoCountAggregateOutputType = {
    id: number
    pontuacao: number
    usuarioId: number
    quizId: number
    _all: number
  }


  export type PontuacacaoAvgAggregateInputType = {
    pontuacao?: true
  }

  export type PontuacacaoSumAggregateInputType = {
    pontuacao?: true
  }

  export type PontuacacaoMinAggregateInputType = {
    id?: true
    pontuacao?: true
    usuarioId?: true
    quizId?: true
  }

  export type PontuacacaoMaxAggregateInputType = {
    id?: true
    pontuacao?: true
    usuarioId?: true
    quizId?: true
  }

  export type PontuacacaoCountAggregateInputType = {
    id?: true
    pontuacao?: true
    usuarioId?: true
    quizId?: true
    _all?: true
  }

  export type PontuacacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pontuacacao to aggregate.
     */
    where?: PontuacacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacacaos to fetch.
     */
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PontuacacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pontuacacaos
    **/
    _count?: true | PontuacacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PontuacacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PontuacacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PontuacacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PontuacacaoMaxAggregateInputType
  }

  export type GetPontuacacaoAggregateType<T extends PontuacacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePontuacacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePontuacacao[P]>
      : GetScalarType<T[P], AggregatePontuacacao[P]>
  }




  export type PontuacacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacacaoWhereInput
    orderBy?: PontuacacaoOrderByWithAggregationInput | PontuacacaoOrderByWithAggregationInput[]
    by: PontuacacaoScalarFieldEnum[] | PontuacacaoScalarFieldEnum
    having?: PontuacacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PontuacacaoCountAggregateInputType | true
    _avg?: PontuacacaoAvgAggregateInputType
    _sum?: PontuacacaoSumAggregateInputType
    _min?: PontuacacaoMinAggregateInputType
    _max?: PontuacacaoMaxAggregateInputType
  }

  export type PontuacacaoGroupByOutputType = {
    id: string
    pontuacao: number
    usuarioId: string | null
    quizId: string | null
    _count: PontuacacaoCountAggregateOutputType | null
    _avg: PontuacacaoAvgAggregateOutputType | null
    _sum: PontuacacaoSumAggregateOutputType | null
    _min: PontuacacaoMinAggregateOutputType | null
    _max: PontuacacaoMaxAggregateOutputType | null
  }

  type GetPontuacacaoGroupByPayload<T extends PontuacacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PontuacacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PontuacacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PontuacacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PontuacacaoGroupByOutputType[P]>
        }
      >
    >


  export type PontuacacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontuacao?: boolean
    usuarioId?: boolean
    quizId?: boolean
    Usuario?: boolean | Pontuacacao$UsuarioArgs<ExtArgs>
    Quiz?: boolean | Pontuacacao$QuizArgs<ExtArgs>
  }, ExtArgs["result"]["pontuacacao"]>

  export type PontuacacaoSelectScalar = {
    id?: boolean
    pontuacao?: boolean
    usuarioId?: boolean
    quizId?: boolean
  }

  export type PontuacacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | Pontuacacao$UsuarioArgs<ExtArgs>
    Quiz?: boolean | Pontuacacao$QuizArgs<ExtArgs>
  }


  export type $PontuacacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pontuacacao"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      Quiz: Prisma.$QuizPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pontuacao: number
      usuarioId: string | null
      quizId: string | null
    }, ExtArgs["result"]["pontuacacao"]>
    composites: {}
  }


  type PontuacacaoGetPayload<S extends boolean | null | undefined | PontuacacaoDefaultArgs> = $Result.GetResult<Prisma.$PontuacacaoPayload, S>

  type PontuacacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PontuacacaoFindManyArgs, 'select' | 'include'> & {
      select?: PontuacacaoCountAggregateInputType | true
    }

  export interface PontuacacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pontuacacao'], meta: { name: 'Pontuacacao' } }
    /**
     * Find zero or one Pontuacacao that matches the filter.
     * @param {PontuacacaoFindUniqueArgs} args - Arguments to find a Pontuacacao
     * @example
     * // Get one Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PontuacacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pontuacacao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PontuacacaoFindUniqueOrThrowArgs} args - Arguments to find a Pontuacacao
     * @example
     * // Get one Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PontuacacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pontuacacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoFindFirstArgs} args - Arguments to find a Pontuacacao
     * @example
     * // Get one Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PontuacacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoFindFirstArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pontuacacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoFindFirstOrThrowArgs} args - Arguments to find a Pontuacacao
     * @example
     * // Get one Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PontuacacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pontuacacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pontuacacaos
     * const pontuacacaos = await prisma.pontuacacao.findMany()
     * 
     * // Get first 10 Pontuacacaos
     * const pontuacacaos = await prisma.pontuacacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pontuacacaoWithIdOnly = await prisma.pontuacacao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PontuacacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pontuacacao.
     * @param {PontuacacaoCreateArgs} args - Arguments to create a Pontuacacao.
     * @example
     * // Create one Pontuacacao
     * const Pontuacacao = await prisma.pontuacacao.create({
     *   data: {
     *     // ... data to create a Pontuacacao
     *   }
     * })
     * 
    **/
    create<T extends PontuacacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoCreateArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pontuacacaos.
     *     @param {PontuacacaoCreateManyArgs} args - Arguments to create many Pontuacacaos.
     *     @example
     *     // Create many Pontuacacaos
     *     const pontuacacao = await prisma.pontuacacao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PontuacacaoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pontuacacao.
     * @param {PontuacacaoDeleteArgs} args - Arguments to delete one Pontuacacao.
     * @example
     * // Delete one Pontuacacao
     * const Pontuacacao = await prisma.pontuacacao.delete({
     *   where: {
     *     // ... filter to delete one Pontuacacao
     *   }
     * })
     * 
    **/
    delete<T extends PontuacacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoDeleteArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pontuacacao.
     * @param {PontuacacaoUpdateArgs} args - Arguments to update one Pontuacacao.
     * @example
     * // Update one Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PontuacacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoUpdateArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pontuacacaos.
     * @param {PontuacacaoDeleteManyArgs} args - Arguments to filter Pontuacacaos to delete.
     * @example
     * // Delete a few Pontuacacaos
     * const { count } = await prisma.pontuacacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PontuacacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PontuacacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pontuacacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pontuacacaos
     * const pontuacacao = await prisma.pontuacacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PontuacacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pontuacacao.
     * @param {PontuacacaoUpsertArgs} args - Arguments to update or create a Pontuacacao.
     * @example
     * // Update or create a Pontuacacao
     * const pontuacacao = await prisma.pontuacacao.upsert({
     *   create: {
     *     // ... data to create a Pontuacacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pontuacacao we want to update
     *   }
     * })
    **/
    upsert<T extends PontuacacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PontuacacaoUpsertArgs<ExtArgs>>
    ): Prisma__PontuacacaoClient<$Result.GetResult<Prisma.$PontuacacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pontuacacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoCountArgs} args - Arguments to filter Pontuacacaos to count.
     * @example
     * // Count the number of Pontuacacaos
     * const count = await prisma.pontuacacao.count({
     *   where: {
     *     // ... the filter for the Pontuacacaos we want to count
     *   }
     * })
    **/
    count<T extends PontuacacaoCountArgs>(
      args?: Subset<T, PontuacacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PontuacacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pontuacacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PontuacacaoAggregateArgs>(args: Subset<T, PontuacacaoAggregateArgs>): Prisma.PrismaPromise<GetPontuacacaoAggregateType<T>>

    /**
     * Group by Pontuacacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PontuacacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PontuacacaoGroupByArgs['orderBy'] }
        : { orderBy?: PontuacacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PontuacacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPontuacacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pontuacacao model
   */
  readonly fields: PontuacacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pontuacacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PontuacacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Usuario<T extends Pontuacacao$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Pontuacacao$UsuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Quiz<T extends Pontuacacao$QuizArgs<ExtArgs> = {}>(args?: Subset<T, Pontuacacao$QuizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pontuacacao model
   */ 
  interface PontuacacaoFieldRefs {
    readonly id: FieldRef<"Pontuacacao", 'String'>
    readonly pontuacao: FieldRef<"Pontuacacao", 'Int'>
    readonly usuarioId: FieldRef<"Pontuacacao", 'String'>
    readonly quizId: FieldRef<"Pontuacacao", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Pontuacacao findUnique
   */
  export type PontuacacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacacao to fetch.
     */
    where: PontuacacaoWhereUniqueInput
  }


  /**
   * Pontuacacao findUniqueOrThrow
   */
  export type PontuacacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacacao to fetch.
     */
    where: PontuacacaoWhereUniqueInput
  }


  /**
   * Pontuacacao findFirst
   */
  export type PontuacacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacacao to fetch.
     */
    where?: PontuacacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacacaos to fetch.
     */
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pontuacacaos.
     */
    cursor?: PontuacacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pontuacacaos.
     */
    distinct?: PontuacacaoScalarFieldEnum | PontuacacaoScalarFieldEnum[]
  }


  /**
   * Pontuacacao findFirstOrThrow
   */
  export type PontuacacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacacao to fetch.
     */
    where?: PontuacacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacacaos to fetch.
     */
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pontuacacaos.
     */
    cursor?: PontuacacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pontuacacaos.
     */
    distinct?: PontuacacaoScalarFieldEnum | PontuacacaoScalarFieldEnum[]
  }


  /**
   * Pontuacacao findMany
   */
  export type PontuacacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacacaos to fetch.
     */
    where?: PontuacacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacacaos to fetch.
     */
    orderBy?: PontuacacaoOrderByWithRelationInput | PontuacacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pontuacacaos.
     */
    cursor?: PontuacacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacacaos.
     */
    skip?: number
    distinct?: PontuacacaoScalarFieldEnum | PontuacacaoScalarFieldEnum[]
  }


  /**
   * Pontuacacao create
   */
  export type PontuacacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pontuacacao.
     */
    data: XOR<PontuacacaoCreateInput, PontuacacaoUncheckedCreateInput>
  }


  /**
   * Pontuacacao createMany
   */
  export type PontuacacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pontuacacaos.
     */
    data: PontuacacaoCreateManyInput | PontuacacaoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pontuacacao update
   */
  export type PontuacacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pontuacacao.
     */
    data: XOR<PontuacacaoUpdateInput, PontuacacaoUncheckedUpdateInput>
    /**
     * Choose, which Pontuacacao to update.
     */
    where: PontuacacaoWhereUniqueInput
  }


  /**
   * Pontuacacao updateMany
   */
  export type PontuacacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pontuacacaos.
     */
    data: XOR<PontuacacaoUpdateManyMutationInput, PontuacacaoUncheckedUpdateManyInput>
    /**
     * Filter which Pontuacacaos to update
     */
    where?: PontuacacaoWhereInput
  }


  /**
   * Pontuacacao upsert
   */
  export type PontuacacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pontuacacao to update in case it exists.
     */
    where: PontuacacaoWhereUniqueInput
    /**
     * In case the Pontuacacao found by the `where` argument doesn't exist, create a new Pontuacacao with this data.
     */
    create: XOR<PontuacacaoCreateInput, PontuacacaoUncheckedCreateInput>
    /**
     * In case the Pontuacacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PontuacacaoUpdateInput, PontuacacaoUncheckedUpdateInput>
  }


  /**
   * Pontuacacao delete
   */
  export type PontuacacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
    /**
     * Filter which Pontuacacao to delete.
     */
    where: PontuacacaoWhereUniqueInput
  }


  /**
   * Pontuacacao deleteMany
   */
  export type PontuacacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pontuacacaos to delete
     */
    where?: PontuacacaoWhereInput
  }


  /**
   * Pontuacacao.Usuario
   */
  export type Pontuacacao$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }


  /**
   * Pontuacacao.Quiz
   */
  export type Pontuacacao$QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }


  /**
   * Pontuacacao without action
   */
  export type PontuacacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacacao
     */
    select?: PontuacacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PontuacacaoInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuizScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const PerguntaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    quizId: 'quizId'
  };

  export type PerguntaScalarFieldEnum = (typeof PerguntaScalarFieldEnum)[keyof typeof PerguntaScalarFieldEnum]


  export const Pergunta_RespotaScalarFieldEnum: {
    id: 'id',
    resultado: 'resultado',
    perguntaId: 'perguntaId',
    respostaId: 'respostaId',
    quizId: 'quizId'
  };

  export type Pergunta_RespotaScalarFieldEnum = (typeof Pergunta_RespotaScalarFieldEnum)[keyof typeof Pergunta_RespotaScalarFieldEnum]


  export const RespostaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type RespostaScalarFieldEnum = (typeof RespostaScalarFieldEnum)[keyof typeof RespostaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PontuacacaoScalarFieldEnum: {
    id: 'id',
    pontuacao: 'pontuacao',
    usuarioId: 'usuarioId',
    quizId: 'quizId'
  };

  export type PontuacacaoScalarFieldEnum = (typeof PontuacacaoScalarFieldEnum)[keyof typeof PontuacacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    nome?: StringFilter<"Quiz"> | string
    Pontuacacao?: PontuacacaoListRelationFilter
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    Pontuacacao?: PontuacacaoOrderByRelationAggregateInput
    Pergunta_Respota?: Pergunta_RespotaOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    nome?: StringFilter<"Quiz"> | string
    Pontuacacao?: PontuacacaoListRelationFilter
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    nome?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type PerguntaWhereInput = {
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    id?: StringFilter<"Pergunta"> | string
    titulo?: StringFilter<"Pergunta"> | string
    quizId?: StringNullableFilter<"Pergunta"> | string | null
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }

  export type PerguntaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    quizId?: SortOrderInput | SortOrder
    Pergunta_Respota?: Pergunta_RespotaOrderByRelationAggregateInput
  }

  export type PerguntaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    titulo?: StringFilter<"Pergunta"> | string
    quizId?: StringNullableFilter<"Pergunta"> | string | null
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }, "id">

  export type PerguntaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    quizId?: SortOrderInput | SortOrder
    _count?: PerguntaCountOrderByAggregateInput
    _max?: PerguntaMaxOrderByAggregateInput
    _min?: PerguntaMinOrderByAggregateInput
  }

  export type PerguntaScalarWhereWithAggregatesInput = {
    AND?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    OR?: PerguntaScalarWhereWithAggregatesInput[]
    NOT?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pergunta"> | string
    titulo?: StringWithAggregatesFilter<"Pergunta"> | string
    quizId?: StringNullableWithAggregatesFilter<"Pergunta"> | string | null
  }

  export type Pergunta_RespotaWhereInput = {
    AND?: Pergunta_RespotaWhereInput | Pergunta_RespotaWhereInput[]
    OR?: Pergunta_RespotaWhereInput[]
    NOT?: Pergunta_RespotaWhereInput | Pergunta_RespotaWhereInput[]
    id?: StringFilter<"Pergunta_Respota"> | string
    resultado?: BoolFilter<"Pergunta_Respota"> | boolean
    perguntaId?: StringFilter<"Pergunta_Respota"> | string
    respostaId?: StringFilter<"Pergunta_Respota"> | string
    quizId?: StringFilter<"Pergunta_Respota"> | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    pergunta?: XOR<PerguntaRelationFilter, PerguntaWhereInput>
    resposta?: XOR<RespostaRelationFilter, RespostaWhereInput>
  }

  export type Pergunta_RespotaOrderByWithRelationInput = {
    id?: SortOrder
    resultado?: SortOrder
    perguntaId?: SortOrder
    respostaId?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    pergunta?: PerguntaOrderByWithRelationInput
    resposta?: RespostaOrderByWithRelationInput
  }

  export type Pergunta_RespotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Pergunta_RespotaWhereInput | Pergunta_RespotaWhereInput[]
    OR?: Pergunta_RespotaWhereInput[]
    NOT?: Pergunta_RespotaWhereInput | Pergunta_RespotaWhereInput[]
    resultado?: BoolFilter<"Pergunta_Respota"> | boolean
    perguntaId?: StringFilter<"Pergunta_Respota"> | string
    respostaId?: StringFilter<"Pergunta_Respota"> | string
    quizId?: StringFilter<"Pergunta_Respota"> | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    pergunta?: XOR<PerguntaRelationFilter, PerguntaWhereInput>
    resposta?: XOR<RespostaRelationFilter, RespostaWhereInput>
  }, "id">

  export type Pergunta_RespotaOrderByWithAggregationInput = {
    id?: SortOrder
    resultado?: SortOrder
    perguntaId?: SortOrder
    respostaId?: SortOrder
    quizId?: SortOrder
    _count?: Pergunta_RespotaCountOrderByAggregateInput
    _max?: Pergunta_RespotaMaxOrderByAggregateInput
    _min?: Pergunta_RespotaMinOrderByAggregateInput
  }

  export type Pergunta_RespotaScalarWhereWithAggregatesInput = {
    AND?: Pergunta_RespotaScalarWhereWithAggregatesInput | Pergunta_RespotaScalarWhereWithAggregatesInput[]
    OR?: Pergunta_RespotaScalarWhereWithAggregatesInput[]
    NOT?: Pergunta_RespotaScalarWhereWithAggregatesInput | Pergunta_RespotaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pergunta_Respota"> | string
    resultado?: BoolWithAggregatesFilter<"Pergunta_Respota"> | boolean
    perguntaId?: StringWithAggregatesFilter<"Pergunta_Respota"> | string
    respostaId?: StringWithAggregatesFilter<"Pergunta_Respota"> | string
    quizId?: StringWithAggregatesFilter<"Pergunta_Respota"> | string
  }

  export type RespostaWhereInput = {
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    id?: StringFilter<"Resposta"> | string
    descricao?: StringFilter<"Resposta"> | string
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }

  export type RespostaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    Pergunta_Respota?: Pergunta_RespotaOrderByRelationAggregateInput
  }

  export type RespostaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    descricao?: StringFilter<"Resposta"> | string
    Pergunta_Respota?: Pergunta_RespotaListRelationFilter
  }, "id">

  export type RespostaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: RespostaCountOrderByAggregateInput
    _max?: RespostaMaxOrderByAggregateInput
    _min?: RespostaMinOrderByAggregateInput
  }

  export type RespostaScalarWhereWithAggregatesInput = {
    AND?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    OR?: RespostaScalarWhereWithAggregatesInput[]
    NOT?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resposta"> | string
    descricao?: StringWithAggregatesFilter<"Resposta"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    tipo?: BoolFilter<"Usuario"> | boolean
    meusPontos?: PontuacacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    meusPontos?: PontuacacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    tipo?: BoolFilter<"Usuario"> | boolean
    meusPontos?: PontuacacaoListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type PontuacacaoWhereInput = {
    AND?: PontuacacaoWhereInput | PontuacacaoWhereInput[]
    OR?: PontuacacaoWhereInput[]
    NOT?: PontuacacaoWhereInput | PontuacacaoWhereInput[]
    id?: StringFilter<"Pontuacacao"> | string
    pontuacao?: IntFilter<"Pontuacacao"> | number
    usuarioId?: StringNullableFilter<"Pontuacacao"> | string | null
    quizId?: StringNullableFilter<"Pontuacacao"> | string | null
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    Quiz?: XOR<QuizNullableRelationFilter, QuizWhereInput> | null
  }

  export type PontuacacaoOrderByWithRelationInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    Quiz?: QuizOrderByWithRelationInput
  }

  export type PontuacacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PontuacacaoWhereInput | PontuacacaoWhereInput[]
    OR?: PontuacacaoWhereInput[]
    NOT?: PontuacacaoWhereInput | PontuacacaoWhereInput[]
    pontuacao?: IntFilter<"Pontuacacao"> | number
    usuarioId?: StringNullableFilter<"Pontuacacao"> | string | null
    quizId?: StringNullableFilter<"Pontuacacao"> | string | null
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    Quiz?: XOR<QuizNullableRelationFilter, QuizWhereInput> | null
  }, "id">

  export type PontuacacaoOrderByWithAggregationInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    _count?: PontuacacaoCountOrderByAggregateInput
    _avg?: PontuacacaoAvgOrderByAggregateInput
    _max?: PontuacacaoMaxOrderByAggregateInput
    _min?: PontuacacaoMinOrderByAggregateInput
    _sum?: PontuacacaoSumOrderByAggregateInput
  }

  export type PontuacacaoScalarWhereWithAggregatesInput = {
    AND?: PontuacacaoScalarWhereWithAggregatesInput | PontuacacaoScalarWhereWithAggregatesInput[]
    OR?: PontuacacaoScalarWhereWithAggregatesInput[]
    NOT?: PontuacacaoScalarWhereWithAggregatesInput | PontuacacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pontuacacao"> | string
    pontuacao?: IntWithAggregatesFilter<"Pontuacacao"> | number
    usuarioId?: StringNullableWithAggregatesFilter<"Pontuacacao"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"Pontuacacao"> | string | null
  }

  export type QuizCreateInput = {
    id?: string
    nome: string
    Pontuacacao?: PontuacacaoCreateNestedManyWithoutQuizInput
    Pergunta_Respota?: Pergunta_RespotaCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    nome: string
    Pontuacacao?: PontuacacaoUncheckedCreateNestedManyWithoutQuizInput
    Pergunta_Respota?: Pergunta_RespotaUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pontuacacao?: PontuacacaoUpdateManyWithoutQuizNestedInput
    Pergunta_Respota?: Pergunta_RespotaUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pontuacacao?: PontuacacaoUncheckedUpdateManyWithoutQuizNestedInput
    Pergunta_Respota?: Pergunta_RespotaUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    nome: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaCreateInput = {
    id?: string
    titulo: string
    quizId?: string | null
    Pergunta_Respota?: Pergunta_RespotaCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaUncheckedCreateInput = {
    id?: string
    titulo: string
    quizId?: string | null
    Pergunta_Respota?: Pergunta_RespotaUncheckedCreateNestedManyWithoutPerguntaInput
  }

  export type PerguntaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    Pergunta_Respota?: Pergunta_RespotaUpdateManyWithoutPerguntaNestedInput
  }

  export type PerguntaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    Pergunta_Respota?: Pergunta_RespotaUncheckedUpdateManyWithoutPerguntaNestedInput
  }

  export type PerguntaCreateManyInput = {
    id?: string
    titulo: string
    quizId?: string | null
  }

  export type PerguntaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerguntaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pergunta_RespotaCreateInput = {
    id?: string
    resultado: boolean
    quiz: QuizCreateNestedOneWithoutPergunta_RespotaInput
    pergunta: PerguntaCreateNestedOneWithoutPergunta_RespotaInput
    resposta: RespostaCreateNestedOneWithoutPergunta_RespotaInput
  }

  export type Pergunta_RespotaUncheckedCreateInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    respostaId: string
    quizId: string
  }

  export type Pergunta_RespotaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    quiz?: QuizUpdateOneRequiredWithoutPergunta_RespotaNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
    resposta?: RespostaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
  }

  export type Pergunta_RespotaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    respostaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaCreateManyInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    respostaId: string
    quizId: string
  }

  export type Pergunta_RespotaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Pergunta_RespotaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    respostaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type RespostaCreateInput = {
    id?: string
    descricao: string
    Pergunta_Respota?: Pergunta_RespotaCreateNestedManyWithoutRespostaInput
  }

  export type RespostaUncheckedCreateInput = {
    id?: string
    descricao: string
    Pergunta_Respota?: Pergunta_RespotaUncheckedCreateNestedManyWithoutRespostaInput
  }

  export type RespostaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    Pergunta_Respota?: Pergunta_RespotaUpdateManyWithoutRespostaNestedInput
  }

  export type RespostaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    Pergunta_Respota?: Pergunta_RespotaUncheckedUpdateManyWithoutRespostaNestedInput
  }

  export type RespostaCreateManyInput = {
    id?: string
    descricao: string
  }

  export type RespostaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type RespostaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    tipo: boolean
    meusPontos?: PontuacacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    tipo: boolean
    meusPontos?: PontuacacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
    meusPontos?: PontuacacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
    meusPontos?: PontuacacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    tipo: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PontuacacaoCreateInput = {
    id?: string
    pontuacao: number
    Usuario?: UsuarioCreateNestedOneWithoutMeusPontosInput
    Quiz?: QuizCreateNestedOneWithoutPontuacacaoInput
  }

  export type PontuacacaoUncheckedCreateInput = {
    id?: string
    pontuacao: number
    usuarioId?: string | null
    quizId?: string | null
  }

  export type PontuacacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneWithoutMeusPontosNestedInput
    Quiz?: QuizUpdateOneWithoutPontuacacaoNestedInput
  }

  export type PontuacacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PontuacacaoCreateManyInput = {
    id?: string
    pontuacao: number
    usuarioId?: string | null
    quizId?: string | null
  }

  export type PontuacacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type PontuacacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PontuacacaoListRelationFilter = {
    every?: PontuacacaoWhereInput
    some?: PontuacacaoWhereInput
    none?: PontuacacaoWhereInput
  }

  export type Pergunta_RespotaListRelationFilter = {
    every?: Pergunta_RespotaWhereInput
    some?: Pergunta_RespotaWhereInput
    none?: Pergunta_RespotaWhereInput
  }

  export type PontuacacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Pergunta_RespotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PerguntaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    quizId?: SortOrder
  }

  export type PerguntaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    quizId?: SortOrder
  }

  export type PerguntaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    quizId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuizRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type PerguntaRelationFilter = {
    is?: PerguntaWhereInput
    isNot?: PerguntaWhereInput
  }

  export type RespostaRelationFilter = {
    is?: RespostaWhereInput
    isNot?: RespostaWhereInput
  }

  export type Pergunta_RespotaCountOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    perguntaId?: SortOrder
    respostaId?: SortOrder
    quizId?: SortOrder
  }

  export type Pergunta_RespotaMaxOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    perguntaId?: SortOrder
    respostaId?: SortOrder
    quizId?: SortOrder
  }

  export type Pergunta_RespotaMinOrderByAggregateInput = {
    id?: SortOrder
    resultado?: SortOrder
    perguntaId?: SortOrder
    respostaId?: SortOrder
    quizId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RespostaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type RespostaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type RespostaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type QuizNullableRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type PontuacacaoCountOrderByAggregateInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    usuarioId?: SortOrder
    quizId?: SortOrder
  }

  export type PontuacacaoAvgOrderByAggregateInput = {
    pontuacao?: SortOrder
  }

  export type PontuacacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    usuarioId?: SortOrder
    quizId?: SortOrder
  }

  export type PontuacacaoMinOrderByAggregateInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    usuarioId?: SortOrder
    quizId?: SortOrder
  }

  export type PontuacacaoSumOrderByAggregateInput = {
    pontuacao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PontuacacaoCreateNestedManyWithoutQuizInput = {
    create?: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput> | PontuacacaoCreateWithoutQuizInput[] | PontuacacaoUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutQuizInput | PontuacacaoCreateOrConnectWithoutQuizInput[]
    createMany?: PontuacacaoCreateManyQuizInputEnvelope
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
  }

  export type Pergunta_RespotaCreateNestedManyWithoutQuizInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput> | Pergunta_RespotaCreateWithoutQuizInput[] | Pergunta_RespotaUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutQuizInput | Pergunta_RespotaCreateOrConnectWithoutQuizInput[]
    createMany?: Pergunta_RespotaCreateManyQuizInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type PontuacacaoUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput> | PontuacacaoCreateWithoutQuizInput[] | PontuacacaoUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutQuizInput | PontuacacaoCreateOrConnectWithoutQuizInput[]
    createMany?: PontuacacaoCreateManyQuizInputEnvelope
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
  }

  export type Pergunta_RespotaUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput> | Pergunta_RespotaCreateWithoutQuizInput[] | Pergunta_RespotaUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutQuizInput | Pergunta_RespotaCreateOrConnectWithoutQuizInput[]
    createMany?: Pergunta_RespotaCreateManyQuizInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PontuacacaoUpdateManyWithoutQuizNestedInput = {
    create?: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput> | PontuacacaoCreateWithoutQuizInput[] | PontuacacaoUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutQuizInput | PontuacacaoCreateOrConnectWithoutQuizInput[]
    upsert?: PontuacacaoUpsertWithWhereUniqueWithoutQuizInput | PontuacacaoUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: PontuacacaoCreateManyQuizInputEnvelope
    set?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    disconnect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    delete?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    update?: PontuacacaoUpdateWithWhereUniqueWithoutQuizInput | PontuacacaoUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: PontuacacaoUpdateManyWithWhereWithoutQuizInput | PontuacacaoUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
  }

  export type Pergunta_RespotaUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput> | Pergunta_RespotaCreateWithoutQuizInput[] | Pergunta_RespotaUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutQuizInput | Pergunta_RespotaCreateOrConnectWithoutQuizInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutQuizInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Pergunta_RespotaCreateManyQuizInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutQuizInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutQuizInput | Pergunta_RespotaUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type PontuacacaoUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput> | PontuacacaoCreateWithoutQuizInput[] | PontuacacaoUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutQuizInput | PontuacacaoCreateOrConnectWithoutQuizInput[]
    upsert?: PontuacacaoUpsertWithWhereUniqueWithoutQuizInput | PontuacacaoUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: PontuacacaoCreateManyQuizInputEnvelope
    set?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    disconnect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    delete?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    update?: PontuacacaoUpdateWithWhereUniqueWithoutQuizInput | PontuacacaoUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: PontuacacaoUpdateManyWithWhereWithoutQuizInput | PontuacacaoUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput> | Pergunta_RespotaCreateWithoutQuizInput[] | Pergunta_RespotaUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutQuizInput | Pergunta_RespotaCreateOrConnectWithoutQuizInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutQuizInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Pergunta_RespotaCreateManyQuizInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutQuizInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutQuizInput | Pergunta_RespotaUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type Pergunta_RespotaCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput> | Pergunta_RespotaCreateWithoutPerguntaInput[] | Pergunta_RespotaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutPerguntaInput | Pergunta_RespotaCreateOrConnectWithoutPerguntaInput[]
    createMany?: Pergunta_RespotaCreateManyPerguntaInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type Pergunta_RespotaUncheckedCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput> | Pergunta_RespotaCreateWithoutPerguntaInput[] | Pergunta_RespotaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutPerguntaInput | Pergunta_RespotaCreateOrConnectWithoutPerguntaInput[]
    createMany?: Pergunta_RespotaCreateManyPerguntaInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Pergunta_RespotaUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput> | Pergunta_RespotaCreateWithoutPerguntaInput[] | Pergunta_RespotaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutPerguntaInput | Pergunta_RespotaCreateOrConnectWithoutPerguntaInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutPerguntaInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: Pergunta_RespotaCreateManyPerguntaInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutPerguntaInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutPerguntaInput | Pergunta_RespotaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput> | Pergunta_RespotaCreateWithoutPerguntaInput[] | Pergunta_RespotaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutPerguntaInput | Pergunta_RespotaCreateOrConnectWithoutPerguntaInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutPerguntaInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: Pergunta_RespotaCreateManyPerguntaInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutPerguntaInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutPerguntaInput | Pergunta_RespotaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutPergunta_RespotaInput = {
    create?: XOR<QuizCreateWithoutPergunta_RespotaInput, QuizUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPergunta_RespotaInput
    connect?: QuizWhereUniqueInput
  }

  export type PerguntaCreateNestedOneWithoutPergunta_RespotaInput = {
    create?: XOR<PerguntaCreateWithoutPergunta_RespotaInput, PerguntaUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutPergunta_RespotaInput
    connect?: PerguntaWhereUniqueInput
  }

  export type RespostaCreateNestedOneWithoutPergunta_RespotaInput = {
    create?: XOR<RespostaCreateWithoutPergunta_RespotaInput, RespostaUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: RespostaCreateOrConnectWithoutPergunta_RespotaInput
    connect?: RespostaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuizUpdateOneRequiredWithoutPergunta_RespotaNestedInput = {
    create?: XOR<QuizCreateWithoutPergunta_RespotaInput, QuizUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPergunta_RespotaInput
    upsert?: QuizUpsertWithoutPergunta_RespotaInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutPergunta_RespotaInput, QuizUpdateWithoutPergunta_RespotaInput>, QuizUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type PerguntaUpdateOneRequiredWithoutPergunta_RespotaNestedInput = {
    create?: XOR<PerguntaCreateWithoutPergunta_RespotaInput, PerguntaUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutPergunta_RespotaInput
    upsert?: PerguntaUpsertWithoutPergunta_RespotaInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutPergunta_RespotaInput, PerguntaUpdateWithoutPergunta_RespotaInput>, PerguntaUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type RespostaUpdateOneRequiredWithoutPergunta_RespotaNestedInput = {
    create?: XOR<RespostaCreateWithoutPergunta_RespotaInput, RespostaUncheckedCreateWithoutPergunta_RespotaInput>
    connectOrCreate?: RespostaCreateOrConnectWithoutPergunta_RespotaInput
    upsert?: RespostaUpsertWithoutPergunta_RespotaInput
    connect?: RespostaWhereUniqueInput
    update?: XOR<XOR<RespostaUpdateToOneWithWhereWithoutPergunta_RespotaInput, RespostaUpdateWithoutPergunta_RespotaInput>, RespostaUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type Pergunta_RespotaCreateNestedManyWithoutRespostaInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput> | Pergunta_RespotaCreateWithoutRespostaInput[] | Pergunta_RespotaUncheckedCreateWithoutRespostaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutRespostaInput | Pergunta_RespotaCreateOrConnectWithoutRespostaInput[]
    createMany?: Pergunta_RespotaCreateManyRespostaInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type Pergunta_RespotaUncheckedCreateNestedManyWithoutRespostaInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput> | Pergunta_RespotaCreateWithoutRespostaInput[] | Pergunta_RespotaUncheckedCreateWithoutRespostaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutRespostaInput | Pergunta_RespotaCreateOrConnectWithoutRespostaInput[]
    createMany?: Pergunta_RespotaCreateManyRespostaInputEnvelope
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
  }

  export type Pergunta_RespotaUpdateManyWithoutRespostaNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput> | Pergunta_RespotaCreateWithoutRespostaInput[] | Pergunta_RespotaUncheckedCreateWithoutRespostaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutRespostaInput | Pergunta_RespotaCreateOrConnectWithoutRespostaInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutRespostaInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutRespostaInput[]
    createMany?: Pergunta_RespotaCreateManyRespostaInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutRespostaInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutRespostaInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutRespostaInput | Pergunta_RespotaUpdateManyWithWhereWithoutRespostaInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutRespostaNestedInput = {
    create?: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput> | Pergunta_RespotaCreateWithoutRespostaInput[] | Pergunta_RespotaUncheckedCreateWithoutRespostaInput[]
    connectOrCreate?: Pergunta_RespotaCreateOrConnectWithoutRespostaInput | Pergunta_RespotaCreateOrConnectWithoutRespostaInput[]
    upsert?: Pergunta_RespotaUpsertWithWhereUniqueWithoutRespostaInput | Pergunta_RespotaUpsertWithWhereUniqueWithoutRespostaInput[]
    createMany?: Pergunta_RespotaCreateManyRespostaInputEnvelope
    set?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    disconnect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    delete?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    connect?: Pergunta_RespotaWhereUniqueInput | Pergunta_RespotaWhereUniqueInput[]
    update?: Pergunta_RespotaUpdateWithWhereUniqueWithoutRespostaInput | Pergunta_RespotaUpdateWithWhereUniqueWithoutRespostaInput[]
    updateMany?: Pergunta_RespotaUpdateManyWithWhereWithoutRespostaInput | Pergunta_RespotaUpdateManyWithWhereWithoutRespostaInput[]
    deleteMany?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
  }

  export type PontuacacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput> | PontuacacaoCreateWithoutUsuarioInput[] | PontuacacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutUsuarioInput | PontuacacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PontuacacaoCreateManyUsuarioInputEnvelope
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
  }

  export type PontuacacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput> | PontuacacaoCreateWithoutUsuarioInput[] | PontuacacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutUsuarioInput | PontuacacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PontuacacaoCreateManyUsuarioInputEnvelope
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
  }

  export type PontuacacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput> | PontuacacaoCreateWithoutUsuarioInput[] | PontuacacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutUsuarioInput | PontuacacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PontuacacaoUpsertWithWhereUniqueWithoutUsuarioInput | PontuacacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PontuacacaoCreateManyUsuarioInputEnvelope
    set?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    disconnect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    delete?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    update?: PontuacacaoUpdateWithWhereUniqueWithoutUsuarioInput | PontuacacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PontuacacaoUpdateManyWithWhereWithoutUsuarioInput | PontuacacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
  }

  export type PontuacacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput> | PontuacacaoCreateWithoutUsuarioInput[] | PontuacacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PontuacacaoCreateOrConnectWithoutUsuarioInput | PontuacacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PontuacacaoUpsertWithWhereUniqueWithoutUsuarioInput | PontuacacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PontuacacaoCreateManyUsuarioInputEnvelope
    set?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    disconnect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    delete?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    connect?: PontuacacaoWhereUniqueInput | PontuacacaoWhereUniqueInput[]
    update?: PontuacacaoUpdateWithWhereUniqueWithoutUsuarioInput | PontuacacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PontuacacaoUpdateManyWithWhereWithoutUsuarioInput | PontuacacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutMeusPontosInput = {
    create?: XOR<UsuarioCreateWithoutMeusPontosInput, UsuarioUncheckedCreateWithoutMeusPontosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMeusPontosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutPontuacacaoInput = {
    create?: XOR<QuizCreateWithoutPontuacacaoInput, QuizUncheckedCreateWithoutPontuacacaoInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPontuacacaoInput
    connect?: QuizWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneWithoutMeusPontosNestedInput = {
    create?: XOR<UsuarioCreateWithoutMeusPontosInput, UsuarioUncheckedCreateWithoutMeusPontosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMeusPontosInput
    upsert?: UsuarioUpsertWithoutMeusPontosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMeusPontosInput, UsuarioUpdateWithoutMeusPontosInput>, UsuarioUncheckedUpdateWithoutMeusPontosInput>
  }

  export type QuizUpdateOneWithoutPontuacacaoNestedInput = {
    create?: XOR<QuizCreateWithoutPontuacacaoInput, QuizUncheckedCreateWithoutPontuacacaoInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPontuacacaoInput
    upsert?: QuizUpsertWithoutPontuacacaoInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutPontuacacaoInput, QuizUpdateWithoutPontuacacaoInput>, QuizUncheckedUpdateWithoutPontuacacaoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PontuacacaoCreateWithoutQuizInput = {
    id?: string
    pontuacao: number
    Usuario?: UsuarioCreateNestedOneWithoutMeusPontosInput
  }

  export type PontuacacaoUncheckedCreateWithoutQuizInput = {
    id?: string
    pontuacao: number
    usuarioId?: string | null
  }

  export type PontuacacaoCreateOrConnectWithoutQuizInput = {
    where: PontuacacaoWhereUniqueInput
    create: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput>
  }

  export type PontuacacaoCreateManyQuizInputEnvelope = {
    data: PontuacacaoCreateManyQuizInput | PontuacacaoCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type Pergunta_RespotaCreateWithoutQuizInput = {
    id?: string
    resultado: boolean
    pergunta: PerguntaCreateNestedOneWithoutPergunta_RespotaInput
    resposta: RespostaCreateNestedOneWithoutPergunta_RespotaInput
  }

  export type Pergunta_RespotaUncheckedCreateWithoutQuizInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    respostaId: string
  }

  export type Pergunta_RespotaCreateOrConnectWithoutQuizInput = {
    where: Pergunta_RespotaWhereUniqueInput
    create: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput>
  }

  export type Pergunta_RespotaCreateManyQuizInputEnvelope = {
    data: Pergunta_RespotaCreateManyQuizInput | Pergunta_RespotaCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type PontuacacaoUpsertWithWhereUniqueWithoutQuizInput = {
    where: PontuacacaoWhereUniqueInput
    update: XOR<PontuacacaoUpdateWithoutQuizInput, PontuacacaoUncheckedUpdateWithoutQuizInput>
    create: XOR<PontuacacaoCreateWithoutQuizInput, PontuacacaoUncheckedCreateWithoutQuizInput>
  }

  export type PontuacacaoUpdateWithWhereUniqueWithoutQuizInput = {
    where: PontuacacaoWhereUniqueInput
    data: XOR<PontuacacaoUpdateWithoutQuizInput, PontuacacaoUncheckedUpdateWithoutQuizInput>
  }

  export type PontuacacaoUpdateManyWithWhereWithoutQuizInput = {
    where: PontuacacaoScalarWhereInput
    data: XOR<PontuacacaoUpdateManyMutationInput, PontuacacaoUncheckedUpdateManyWithoutQuizInput>
  }

  export type PontuacacaoScalarWhereInput = {
    AND?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
    OR?: PontuacacaoScalarWhereInput[]
    NOT?: PontuacacaoScalarWhereInput | PontuacacaoScalarWhereInput[]
    id?: StringFilter<"Pontuacacao"> | string
    pontuacao?: IntFilter<"Pontuacacao"> | number
    usuarioId?: StringNullableFilter<"Pontuacacao"> | string | null
    quizId?: StringNullableFilter<"Pontuacacao"> | string | null
  }

  export type Pergunta_RespotaUpsertWithWhereUniqueWithoutQuizInput = {
    where: Pergunta_RespotaWhereUniqueInput
    update: XOR<Pergunta_RespotaUpdateWithoutQuizInput, Pergunta_RespotaUncheckedUpdateWithoutQuizInput>
    create: XOR<Pergunta_RespotaCreateWithoutQuizInput, Pergunta_RespotaUncheckedCreateWithoutQuizInput>
  }

  export type Pergunta_RespotaUpdateWithWhereUniqueWithoutQuizInput = {
    where: Pergunta_RespotaWhereUniqueInput
    data: XOR<Pergunta_RespotaUpdateWithoutQuizInput, Pergunta_RespotaUncheckedUpdateWithoutQuizInput>
  }

  export type Pergunta_RespotaUpdateManyWithWhereWithoutQuizInput = {
    where: Pergunta_RespotaScalarWhereInput
    data: XOR<Pergunta_RespotaUpdateManyMutationInput, Pergunta_RespotaUncheckedUpdateManyWithoutQuizInput>
  }

  export type Pergunta_RespotaScalarWhereInput = {
    AND?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
    OR?: Pergunta_RespotaScalarWhereInput[]
    NOT?: Pergunta_RespotaScalarWhereInput | Pergunta_RespotaScalarWhereInput[]
    id?: StringFilter<"Pergunta_Respota"> | string
    resultado?: BoolFilter<"Pergunta_Respota"> | boolean
    perguntaId?: StringFilter<"Pergunta_Respota"> | string
    respostaId?: StringFilter<"Pergunta_Respota"> | string
    quizId?: StringFilter<"Pergunta_Respota"> | string
  }

  export type Pergunta_RespotaCreateWithoutPerguntaInput = {
    id?: string
    resultado: boolean
    quiz: QuizCreateNestedOneWithoutPergunta_RespotaInput
    resposta: RespostaCreateNestedOneWithoutPergunta_RespotaInput
  }

  export type Pergunta_RespotaUncheckedCreateWithoutPerguntaInput = {
    id?: string
    resultado: boolean
    respostaId: string
    quizId: string
  }

  export type Pergunta_RespotaCreateOrConnectWithoutPerguntaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    create: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput>
  }

  export type Pergunta_RespotaCreateManyPerguntaInputEnvelope = {
    data: Pergunta_RespotaCreateManyPerguntaInput | Pergunta_RespotaCreateManyPerguntaInput[]
    skipDuplicates?: boolean
  }

  export type Pergunta_RespotaUpsertWithWhereUniqueWithoutPerguntaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    update: XOR<Pergunta_RespotaUpdateWithoutPerguntaInput, Pergunta_RespotaUncheckedUpdateWithoutPerguntaInput>
    create: XOR<Pergunta_RespotaCreateWithoutPerguntaInput, Pergunta_RespotaUncheckedCreateWithoutPerguntaInput>
  }

  export type Pergunta_RespotaUpdateWithWhereUniqueWithoutPerguntaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    data: XOR<Pergunta_RespotaUpdateWithoutPerguntaInput, Pergunta_RespotaUncheckedUpdateWithoutPerguntaInput>
  }

  export type Pergunta_RespotaUpdateManyWithWhereWithoutPerguntaInput = {
    where: Pergunta_RespotaScalarWhereInput
    data: XOR<Pergunta_RespotaUpdateManyMutationInput, Pergunta_RespotaUncheckedUpdateManyWithoutPerguntaInput>
  }

  export type QuizCreateWithoutPergunta_RespotaInput = {
    id?: string
    nome: string
    Pontuacacao?: PontuacacaoCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutPergunta_RespotaInput = {
    id?: string
    nome: string
    Pontuacacao?: PontuacacaoUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutPergunta_RespotaInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutPergunta_RespotaInput, QuizUncheckedCreateWithoutPergunta_RespotaInput>
  }

  export type PerguntaCreateWithoutPergunta_RespotaInput = {
    id?: string
    titulo: string
    quizId?: string | null
  }

  export type PerguntaUncheckedCreateWithoutPergunta_RespotaInput = {
    id?: string
    titulo: string
    quizId?: string | null
  }

  export type PerguntaCreateOrConnectWithoutPergunta_RespotaInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutPergunta_RespotaInput, PerguntaUncheckedCreateWithoutPergunta_RespotaInput>
  }

  export type RespostaCreateWithoutPergunta_RespotaInput = {
    id?: string
    descricao: string
  }

  export type RespostaUncheckedCreateWithoutPergunta_RespotaInput = {
    id?: string
    descricao: string
  }

  export type RespostaCreateOrConnectWithoutPergunta_RespotaInput = {
    where: RespostaWhereUniqueInput
    create: XOR<RespostaCreateWithoutPergunta_RespotaInput, RespostaUncheckedCreateWithoutPergunta_RespotaInput>
  }

  export type QuizUpsertWithoutPergunta_RespotaInput = {
    update: XOR<QuizUpdateWithoutPergunta_RespotaInput, QuizUncheckedUpdateWithoutPergunta_RespotaInput>
    create: XOR<QuizCreateWithoutPergunta_RespotaInput, QuizUncheckedCreateWithoutPergunta_RespotaInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutPergunta_RespotaInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutPergunta_RespotaInput, QuizUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type QuizUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pontuacacao?: PontuacacaoUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pontuacacao?: PontuacacaoUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type PerguntaUpsertWithoutPergunta_RespotaInput = {
    update: XOR<PerguntaUpdateWithoutPergunta_RespotaInput, PerguntaUncheckedUpdateWithoutPergunta_RespotaInput>
    create: XOR<PerguntaCreateWithoutPergunta_RespotaInput, PerguntaUncheckedCreateWithoutPergunta_RespotaInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutPergunta_RespotaInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutPergunta_RespotaInput, PerguntaUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type PerguntaUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerguntaUncheckedUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RespostaUpsertWithoutPergunta_RespotaInput = {
    update: XOR<RespostaUpdateWithoutPergunta_RespotaInput, RespostaUncheckedUpdateWithoutPergunta_RespotaInput>
    create: XOR<RespostaCreateWithoutPergunta_RespotaInput, RespostaUncheckedCreateWithoutPergunta_RespotaInput>
    where?: RespostaWhereInput
  }

  export type RespostaUpdateToOneWithWhereWithoutPergunta_RespotaInput = {
    where?: RespostaWhereInput
    data: XOR<RespostaUpdateWithoutPergunta_RespotaInput, RespostaUncheckedUpdateWithoutPergunta_RespotaInput>
  }

  export type RespostaUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type RespostaUncheckedUpdateWithoutPergunta_RespotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaCreateWithoutRespostaInput = {
    id?: string
    resultado: boolean
    quiz: QuizCreateNestedOneWithoutPergunta_RespotaInput
    pergunta: PerguntaCreateNestedOneWithoutPergunta_RespotaInput
  }

  export type Pergunta_RespotaUncheckedCreateWithoutRespostaInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    quizId: string
  }

  export type Pergunta_RespotaCreateOrConnectWithoutRespostaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    create: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput>
  }

  export type Pergunta_RespotaCreateManyRespostaInputEnvelope = {
    data: Pergunta_RespotaCreateManyRespostaInput | Pergunta_RespotaCreateManyRespostaInput[]
    skipDuplicates?: boolean
  }

  export type Pergunta_RespotaUpsertWithWhereUniqueWithoutRespostaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    update: XOR<Pergunta_RespotaUpdateWithoutRespostaInput, Pergunta_RespotaUncheckedUpdateWithoutRespostaInput>
    create: XOR<Pergunta_RespotaCreateWithoutRespostaInput, Pergunta_RespotaUncheckedCreateWithoutRespostaInput>
  }

  export type Pergunta_RespotaUpdateWithWhereUniqueWithoutRespostaInput = {
    where: Pergunta_RespotaWhereUniqueInput
    data: XOR<Pergunta_RespotaUpdateWithoutRespostaInput, Pergunta_RespotaUncheckedUpdateWithoutRespostaInput>
  }

  export type Pergunta_RespotaUpdateManyWithWhereWithoutRespostaInput = {
    where: Pergunta_RespotaScalarWhereInput
    data: XOR<Pergunta_RespotaUpdateManyMutationInput, Pergunta_RespotaUncheckedUpdateManyWithoutRespostaInput>
  }

  export type PontuacacaoCreateWithoutUsuarioInput = {
    id?: string
    pontuacao: number
    Quiz?: QuizCreateNestedOneWithoutPontuacacaoInput
  }

  export type PontuacacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    pontuacao: number
    quizId?: string | null
  }

  export type PontuacacaoCreateOrConnectWithoutUsuarioInput = {
    where: PontuacacaoWhereUniqueInput
    create: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type PontuacacaoCreateManyUsuarioInputEnvelope = {
    data: PontuacacaoCreateManyUsuarioInput | PontuacacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PontuacacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PontuacacaoWhereUniqueInput
    update: XOR<PontuacacaoUpdateWithoutUsuarioInput, PontuacacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PontuacacaoCreateWithoutUsuarioInput, PontuacacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type PontuacacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PontuacacaoWhereUniqueInput
    data: XOR<PontuacacaoUpdateWithoutUsuarioInput, PontuacacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PontuacacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PontuacacaoScalarWhereInput
    data: XOR<PontuacacaoUpdateManyMutationInput, PontuacacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioCreateWithoutMeusPontosInput = {
    id?: string
    nome: string
    tipo: boolean
  }

  export type UsuarioUncheckedCreateWithoutMeusPontosInput = {
    id?: string
    nome: string
    tipo: boolean
  }

  export type UsuarioCreateOrConnectWithoutMeusPontosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMeusPontosInput, UsuarioUncheckedCreateWithoutMeusPontosInput>
  }

  export type QuizCreateWithoutPontuacacaoInput = {
    id?: string
    nome: string
    Pergunta_Respota?: Pergunta_RespotaCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutPontuacacaoInput = {
    id?: string
    nome: string
    Pergunta_Respota?: Pergunta_RespotaUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutPontuacacaoInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutPontuacacaoInput, QuizUncheckedCreateWithoutPontuacacaoInput>
  }

  export type UsuarioUpsertWithoutMeusPontosInput = {
    update: XOR<UsuarioUpdateWithoutMeusPontosInput, UsuarioUncheckedUpdateWithoutMeusPontosInput>
    create: XOR<UsuarioCreateWithoutMeusPontosInput, UsuarioUncheckedCreateWithoutMeusPontosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMeusPontosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMeusPontosInput, UsuarioUncheckedUpdateWithoutMeusPontosInput>
  }

  export type UsuarioUpdateWithoutMeusPontosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateWithoutMeusPontosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizUpsertWithoutPontuacacaoInput = {
    update: XOR<QuizUpdateWithoutPontuacacaoInput, QuizUncheckedUpdateWithoutPontuacacaoInput>
    create: XOR<QuizCreateWithoutPontuacacaoInput, QuizUncheckedCreateWithoutPontuacacaoInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutPontuacacaoInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutPontuacacaoInput, QuizUncheckedUpdateWithoutPontuacacaoInput>
  }

  export type QuizUpdateWithoutPontuacacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pergunta_Respota?: Pergunta_RespotaUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutPontuacacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Pergunta_Respota?: Pergunta_RespotaUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type PontuacacaoCreateManyQuizInput = {
    id?: string
    pontuacao: number
    usuarioId?: string | null
  }

  export type Pergunta_RespotaCreateManyQuizInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    respostaId: string
  }

  export type PontuacacaoUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    Usuario?: UsuarioUpdateOneWithoutMeusPontosNestedInput
  }

  export type PontuacacaoUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PontuacacaoUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pergunta_RespotaUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    pergunta?: PerguntaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
    resposta?: RespostaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
  }

  export type Pergunta_RespotaUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    respostaId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    respostaId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaCreateManyPerguntaInput = {
    id?: string
    resultado: boolean
    respostaId: string
    quizId: string
  }

  export type Pergunta_RespotaUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    quiz?: QuizUpdateOneRequiredWithoutPergunta_RespotaNestedInput
    resposta?: RespostaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
  }

  export type Pergunta_RespotaUncheckedUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    respostaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    respostaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaCreateManyRespostaInput = {
    id?: string
    resultado: boolean
    perguntaId: string
    quizId: string
  }

  export type Pergunta_RespotaUpdateWithoutRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    quiz?: QuizUpdateOneRequiredWithoutPergunta_RespotaNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutPergunta_RespotaNestedInput
  }

  export type Pergunta_RespotaUncheckedUpdateWithoutRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type Pergunta_RespotaUncheckedUpdateManyWithoutRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultado?: BoolFieldUpdateOperationsInput | boolean
    perguntaId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacacaoCreateManyUsuarioInput = {
    id?: string
    pontuacao: number
    quizId?: string | null
  }

  export type PontuacacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    Quiz?: QuizUpdateOneWithoutPontuacacaoNestedInput
  }

  export type PontuacacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PontuacacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pontuacao?: IntFieldUpdateOperationsInput | number
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use QuizCountOutputTypeDefaultArgs instead
     */
    export type QuizCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerguntaCountOutputTypeDefaultArgs instead
     */
    export type PerguntaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerguntaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RespostaCountOutputTypeDefaultArgs instead
     */
    export type RespostaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RespostaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizDefaultArgs instead
     */
    export type QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerguntaDefaultArgs instead
     */
    export type PerguntaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerguntaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Pergunta_RespotaDefaultArgs instead
     */
    export type Pergunta_RespotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Pergunta_RespotaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RespostaDefaultArgs instead
     */
    export type RespostaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RespostaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PontuacacaoDefaultArgs instead
     */
    export type PontuacacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PontuacacaoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}