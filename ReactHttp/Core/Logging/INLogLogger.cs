using System;

namespace Core.Logging
{
    public interface INLogLogger<T>
    {
        void Log(EnumLogLevel logLevel, string message, Exception ex = null);
        void LogDebug(string message);
        void LogInfo(string message);
        void LogWarning(string message);
        void LogError(Exception ex, string message);
        void LogTrace(string message);
    }
}
