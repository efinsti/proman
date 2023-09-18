import r from './ref.js'


var test = {


	content: () => {
		return m("form",
			[
				m("div", { "class": "space-y-12" },
					[
						m("div", { "class": "border-b border-gray-900/10 pb-12" },
							[
								m("h2", { "class": "text-base font-semibold leading-7 text-gray-900" },
									"Profile"
								),
								m("p", { "class": "mt-1 text-sm leading-6 text-gray-600" },
									"This information will be displayed publicly so be careful what you share."
								),
								m("div", { "class": "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" },
									[
										m("div", { "class": "sm:col-span-4" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "username" },
													"Username"
												),
												m("div", { "class": "mt-2" },
													m("div", { "class": "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md" },
														[
															m("span", { "class": "flex select-none items-center pl-3 text-gray-500 sm:text-sm" },
																"workcation.com/"
															),
															m("input", { "class": "input block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", "type": "text", "name": "username", "id": "username", "autocomplete": "username", "placeholder": "janesmith" })
														]
													)
												)
											]
										),
										m("div", { "class": "col-span-full" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "about" },
													"About"
												),
												m("div", { "class": "mt-2" },
													m("textarea", { "class": "textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "id": "about", "name": "about", "rows": "3" })
												),
												m("p", { "class": "mt-3 text-sm leading-6 text-gray-600" },
													"Write a few sentences about yourself."
												)
											]
										),
										m("div", { "class": "col-span-full" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "photo" },
													"Photo"
												),
												m("div", { "class": "mt-2 flex items-center gap-x-3" },
													[
														m("svg", { "class": "h-12 w-12 text-gray-300", "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" },
															m("path", { "fill-rule": "evenodd", "d": "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", "clip-rule": "evenodd" })
														),
														m("button", { "class": "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", "type": "button" },
															"Change"
														)
													]
												)
											]
										),
										m("div", { "class": "col-span-full" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "cover-photo" },
													"Cover photo"
												),
												m("div", { "class": "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" },
													m("div", { "class": "text-center" },
														[
															m("svg", { "class": "mx-auto h-12 w-12 text-gray-300", "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" },
																m("path", { "fill-rule": "evenodd", "d": "M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z", "clip-rule": "evenodd" })
															),
															m("div", { "class": "mt-4 flex text-sm leading-6 text-gray-600" },
																[
																	m("label", { "class": "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500", "for": "file-upload" },
																		[
																			m("span",
																				"Upload a file"
																			),
																			m("input", { "class": "sr-only", "id": "file-upload", "name": "file-upload", "type": "file" })
																		]
																	),
																	m("p", { "class": "pl-1" },
																		"or drag and drop"
																	)
																]
															),
															m("p", { "class": "text-xs leading-5 text-gray-600" },
																"PNG, JPG, GIF up to 10MB"
															)
														]
													)
												)
											]
										)
									]
								)
							]
						),
						m("div", { "class": "border-b border-gray-900/10 pb-12" },
							[
								m("h2", { "class": "text-base font-semibold leading-7 text-gray-900" },
									"Personal Information"
								),
								m("p", { "class": "mt-1 text-sm leading-6 text-gray-600" },
									"Use a permanent address where you can receive mail."
								),
								m("div", { "class": "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" },
									[
										m("div", { "class": "sm:col-span-3" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "first-name" },
													"First name"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "first-name", "id": "first-name", "autocomplete": "given-name" })
												)
											]
										),
										m("div", { "class": "sm:col-span-2" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "last-name" },
													"Last name"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "last-name", "id": "last-name", "autocomplete": "family-name" })
												)
											]
										),
										m("div", { "class": "sm:col-span-3" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "email" },
													"Email address"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "id": "email", "name": "email", "type": "email", "autocomplete": "email" })
												)
											]
										),
										m("div", { "class": "sm:col-span-4" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "email" },
													"Avatar"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "file-input file-input-bordered w-full max-w-xs", "type": "file", id:"avatar" })

												)
											]
										),
										m("div", { "class": "sm:col-span-4" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "country" },
													"Country"
												),
												m("div", { "class": "mt-2" },
													m("select", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6", "id": "country", "name": "country", "autocomplete": "country-name" },
														[
															m("option",
																"United States"
															),
															m("option",
																"Canada"
															),
															m("option",
																"Mexico"
															)
														]
													)
												)
											]
										),
										m("div", { "class": "col-span-full" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "street-address" },
													"Street address"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "street-address", "id": "street-address", "autocomplete": "street-address" })
												)
											]
										),
										m("div", { "class": "sm:col-span-2 sm:col-start-2" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "city" },
													"City"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "city", "id": "city", "autocomplete": "address-level2", placeholder: "1000 kutho" })
												)
											]
										),
										m("div", { "class": "sm:col-span-2" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "region" },
													"State / Province"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "region", "id": "region", "autocomplete": "address-level1" })
												)
											]
										),
										m("div", { "class": "sm:col-span-4" },
											[
												m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "postal-code" },
													"ZIP / Postal code"
												),
												m("div", { "class": "mt-2" },
													m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "postal-code", "id": "postal-code", "autocomplete": "postal-code" })
												)
											]
										)
									]
								)
							]
						),
						m("div", { "class": "border-b border-gray-900/10 pb-12" },
							[
								m("h2", { "class": "text-base font-semibold leading-7 text-gray-900" },
									"Notifications"
								),
								m("p", { "class": "mt-1 text-sm leading-6 text-gray-600" },
									"We'll always let you know about important changes, but you pick what else you want to hear about."
								),
								m("div", { "class": "mt-10 space-y-10" },
									[
										m("fieldset",
											[
												m("legend", { "class": "text-sm font-semibold leading-6 text-gray-900" },
													"By Email"
												),
												m("div", { "class": "mt-6 space-y-6" },
													[
														m("div", { "class": "relative flex gap-x-3" },
															[
																m("div", { "class": "flex h-6 items-center" },
																	m("input", { "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "comments", "name": "comments", "type": "checkbox" })
																),
																m("div", { "class": "text-sm leading-6" },
																	[
																		m("label", { "class": "font-medium text-gray-900", "for": "comments" },
																			"Comments"
																		),
																		m("p", { "class": "text-gray-500" },
																			"Get notified when someones posts a comment on a posting."
																		)
																	]
																)
															]
														),
														m("div", { "class": "relative flex gap-x-3" },
															[
																m("div", { "class": "flex h-6 items-center" },
																	m("input", { "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "candidates", "name": "candidates", "type": "checkbox" })
																),
																m("div", { "class": "text-sm leading-6" },
																	[
																		m("label", { "class": "font-medium text-gray-900", "for": "candidates" },
																			"Candidates"
																		),
																		m("p", { "class": "text-gray-500" },
																			"Get notified when a candidate applies for a job."
																		)
																	]
																)
															]
														),
														m("div", { "class": "relative flex gap-x-3" },
															[
																m("div", { "class": "flex h-6 items-center" },
																	m("input", { "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "offers", "name": "offers", "type": "checkbox" })
																),
																m("div", { "class": "text-sm leading-6" },
																	[
																		m("label", { "class": "font-medium text-gray-900", "for": "offers" },
																			"Offers"
																		),
																		m("p", { "class": "text-gray-500" },
																			"Get notified when a candidate accepts or rejects an offer."
																		)
																	]
																)
															]
														)
													]
												)
											]
										),
										m("fieldset",
											[
												m("legend", { "class": "text-sm font-semibold leading-6 text-gray-900" },
													"Push Notifications"
												),
												m("p", { "class": "mt-1 text-sm leading-6 text-gray-600" },
													"These are delivered via SMS to your mobile phone."
												),
												m("div", { "class": "mt-6 space-y-6" },
													[
														m("div", { "class": "flex items-center gap-x-3" },
															[
																m("input", { "class": "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "push-everything", "name": "push-notifications", "type": "radio" }),
																m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "push-everything" },
																	"Everything"
																)
															]
														),
														m("div", { "class": "flex items-center gap-x-3" },
															[
																m("input", { "class": "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "push-email", "name": "push-notifications", "type": "radio" }),
																m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "push-email" },
																	"Same as email"
																)
															]
														),
														m("div", { "class": "flex items-center gap-x-3" },
															[
																m("input", { "class": "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600", "id": "push-nothing", "name": "push-notifications", "type": "radio" }),
																m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "push-nothing" },
																	"No push notifications"
																)
															]
														)
													]
												)
											]
										)
									]
								)
							]
						)
					]
				),
				m("div", { "class": "mt-6 flex items-center justify-end gap-x-6" },
					[
						m("button", { "class": "text-sm font-semibold leading-6 text-gray-900", "type": "button" },
							"Cancel"
						),
						m("button", {
							"class": "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
							onclick: (e) => {
								var e = e || window.event;

								console.log('SUBMIT')

								e.preventDefault();

								var t = r.getValues()
								console.log(t)



							}
						},
							"Save"
						)
					]
				)
			]
		)



	},

	view: () => {
		return r.header(test.content())
	}

}

export default test