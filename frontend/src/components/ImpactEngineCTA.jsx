// import { Cog } from "lucide-react";

// function EngineCTA() {
// 	return (
// 		<section className="bg-gray-900 text-white relative overflow-hidden">
// 			<div className="container mx-auto px-4 py-24 text-center relative z-10">
// 				<Cog
// 					size={256}
// 					strokeWidth={0.5}
// 					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 animate-slow-spin"
// 				/>

// 				<h2 className="text-4xl md:text-5xl font-bold mb-4">
// 					Our engine is running.
// 				</h2>
// 				<p className="text-xl text-blue-300 max-w-2xl mx-auto mb-10">
// 					Let's add your momentum.
// 				</p>
				 
// 				<a
//   href="/contact"
//   className="bg-blue-600 text-white font-bold 
//              text-base sm:text-lg  /* smaller font on small screens */
//              py-3 px-6 sm:py-4 sm:px-10  /* reduce padding on small screens */
//              rounded-full whitespace-nowrap
//              hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30
//              transform hover:-translate-y-1 transition-all duration-300"
// >
//   Become the Next Component
// </a>

				

// 			</div>
// 		</section>
// 	);
// }

// export default EngineCTA;



import { Cog } from "lucide-react";

function EngineCTA() {
	return (
		<section className="bg-gray-900 text-white relative overflow-hidden">
			
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                
                <Cog
                    strokeWidth={0.5}
                    
                    className="text-white/5 animate-slow-spin w-40 h-40 md:w-64 md:h-64"
                />
            </div>
            
			<div className="container mx-auto px-4 py-24 text-center relative z-10">
				
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					Our engine is running.
				</h2>
				<p className="text-xl text-blue-300 max-w-2xl mx-auto mb-10">
					Let's add your momentum.
				</p>
				<a
                    href="/contact"
                    className="bg-blue-600 text-white font-bold 
                                text-base sm:text-lg  /* smaller font on small screens */
                                py-3 px-6 sm:py-4 sm:px-10  
                                rounded-full whitespace-nowrap
                                hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30
                                transform hover:-translate-y-1 transition-all duration-300"
                >
                    Become the Next Component
                </a>
			</div>
		</section>
	);
}

export default EngineCTA;
