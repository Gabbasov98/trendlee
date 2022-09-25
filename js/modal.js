$("[data-modal]").click(function () {
    let modalId = $(this).attr("data-modal")

    openModal(modalId)
})

function openModal(modalId){
    closeModal()
    $(`#${modalId}`).addClass("modal--active")
    $("body").addClass("fixed-body")
}

$(".modal").click(function () {
    closeModal()
})

$(".modal__close").click(function () {
    closeModal()
})

$(".modal__dialog").click(function (e) {
    e.stopPropagation()
})


function closeModal() {
    $('.modal').removeClass("modal--active")
    $("body").removeClass("fixed-body")
}


$("#phoneForm").submit(function (e) {
    e.preventDefault()

    if($("[name='loginTel']").val() != '') {
        openModal("login2")
    }
})

$("#smsForm").submit(function (e) {
    e.preventDefault()

    if($("[name='loginSms']").val() != '') {
        openModal("login3")
    } else {
        openModal("login4")
    }
})
