function App() {
  return (
    <section className="bg-white dark:bg-gray-900" id="cadastro">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
						Cadastro de Usuários
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
						Sistema de cadastro de usuários do Grupo Nobre
					</p>
					<form
						name="fullname"
						data-netlify="true"
						className="space-y-8"
					>
						<div>
							<label
								htmlFor="yourname"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Nome Completo
							</label>
							<input
								type="text"
								name="yourname"
								id="yourname"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Thiago de Jesus Bittencournt"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								E-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="contato.thiagobittencout.com.br"
								required
							/>
						</div>

            <div>
							<label
								htmlFor="phone"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Telefone
							</label>
							<input
								type="phone"
								name="phone"
								id="phone"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="(75) 9 9999-9999"
								required
							/>
						</div>

            <div>
							<label
								htmlFor="birthDate"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Data de Nascimento
							</label>
							<input
								type="birthDate"
								name="birthDate"
								id="birthDate"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="12/03/1990"
								required
							/>
						</div>
						
						<button
							type="submit"
							className="py-3 px-5 text-sm font-medium text-center text-white rounded bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Cadastrar Usuário
						</button>
					</form>
				</div>
			</section>
  )
}

export default App
