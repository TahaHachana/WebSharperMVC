module Website.Model

type PageId = int

type Action =
    | About
    | Admin
    | Error
    | Home
    | Login of Action option
    | Logout
    | [<CompiledName("sub")>] Sub of PageId