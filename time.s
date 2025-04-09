global _start

section .data
    message1: db "YES", 10
    message2: db "NO", 10

section .bss
    numOfNums resb 256
    currentNum resb 256

section .text
_start:
    mov rax, 0
    mov rsi, numOfNums
    mov rdi, 0
    mov rdx, 256
    syscall

remove_n0:
    mov rsi, numOfNums
    mov rcx, rax
    dec rcx
    mov byte [rsi + rcx], 0
    mov rax, 0

to_num0:
    cmp byte [rsi], 0
    jz save_results
    movzx rbx, byte [rsi]
    sub rbx, '0'
    imul rax, 10
    add rax, rbx
    inc rsi
    jmp to_num0

save_results:
    mov [numOfNums], rax

input_loop:
    mov rcx, [numOfNums]
    cmp rcx, 0
    jnz input
    jmp exit

input:
    dec rcx
    mov [numOfNums], rcx
    mov rax, 0
    mov rsi, currentNum
    mov rdi, 0
    mov rdx, 256
    syscall

remove_n:
    mov rsi, currentNum
    mov rcx, rax
    dec rcx
    mov byte [rsi + rcx], 0
    mov rax, 0

to_num:
    cmp byte [rsi], 0
    jz output
    movzx rbx, byte [rsi]
    sub rbx, '0'
    imul rax, 10
    add rax, rbx
    inc rsi
    jmp to_num

output:
    mov [currentNum], rax
    mov rax, [currentNum]
    xor rdx, rdx
    mov rbx, 100
    div rbx
    cmp dl, 60
    jns no
    cmp rax, 24
    jns no
    jmp yes
    
yes:
    mov rax, 1
    mov rsi, message1
    mov rdi, 1
    mov rdx, 4
    syscall
    jmp input_loop

no:
    mov rax, 1
    mov rsi, message2
    mov rdi, 1
    mov rdx, 3
    syscall
    jmp input_loop

exit:
    mov rax, 60
    syscall