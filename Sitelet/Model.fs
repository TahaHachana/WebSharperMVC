module Sitelet.Model

type Action =
    | About
    | Admin
    | Error
    | Home
    | Login of Action option
    | Logout
    | [<CompiledName("sub")>] Sub of PageId

and PageId = int