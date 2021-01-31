
export default () => {

  const texts = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, officia",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque, quidem nam rerum? Eos, aliquam?",
              "These text is text is made random for certain purpose"]

    return texts[Math.floor(Math.random()*texts.length)]
}
