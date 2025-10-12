@echo off
echo Stopping all Node.js and Vite processes...

REM Kill all Node.js processes
taskkill /f /im node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js processes stopped successfully
) else (
    echo No Node.js processes found
)

REM Kill all Vite processes
taskkill /f /im vite.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo Vite processes stopped successfully
) else (
    echo No Vite processes found
)

REM Kill processes by port (common dev ports)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do (
    taskkill /f /pid %%a >nul 2>&1
    echo Killed process on port 5173
)

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /f /pid %%a >nul 2>&1
    echo Killed process on port 3000
)

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do (
    taskkill /f /pid %%a >nul 2>&1
    echo Killed process on port 8080
)

echo All development servers stopped!
pause
